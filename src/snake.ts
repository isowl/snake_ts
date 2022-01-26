import { gameBackground } from './index'
import { initialBodys, initialCell, initialSnakeHead } from "./initial"
import Logical from './logical'
import { Coor, direction, SnakeBodys } from './types'

const {LEFT, RIGHT, UP, DOWN} = direction
const {width, height} = initialCell
    
export default class {
    private _isGrow = false

    constructor (public opts = initialSnakeHead) {}
    
    get isGrow () {
        return this._isGrow
    }
    set isGrow(value: boolean) {
        this._isGrow = value
    }
    //创建蛇头并上样式
    renderHead(): void {
        const {x, y, backgroundColor} = this.opts

        const newNode = document.createElement("div")
        newNode.setAttribute('id', 'head')
        newNode.style.cssText = `
            position: absolute;
            z-index: 2;
            top: ${y}px;
            left: ${x}px;
            width: ${width}px;
            height: ${height}px;
            background-color: ${backgroundColor};
        `
        gameBackground.appendChild(newNode)
    }
    //渲染蛇身
    renderBody(oldCoor?: Coor): void {
        oldCoor === undefined
            ? this.bodyStyle()
            : this.bodyStyle(this.dealHeadCoor(oldCoor, initialBodys))
    }
    //为身体设置样式
    bodyStyle(bodyArr: SnakeBodys = initialBodys): void {
       const len: number = bodyArr.length

       for (let i = 0; i < len; i++) {
           const newNode = document.createElement("div")
           newNode.setAttribute('class', 'body')
           newNode.style.cssText = `
               position: absolute;
               z-index: 1;
               top: ${bodyArr[i].y}px;
               left: ${bodyArr[i].x}px; 
               width: ${width}px;
               height: ${height}px;
               background-color: blue;
           `
           gameBackground.appendChild(newNode)
       }
    }
    //移除蛇头元素
    removeHeadEle(): void {
        const head: HTMLElement | null = document.getElementById('head')
        if (head === null)  return 
        gameBackground.removeChild<HTMLElement>(head)
    }
    //移除身体元素
    removeBodysEle(): void {
        const bodys: HTMLCollectionOf<Element> = document.getElementsByClassName('body')

        if (bodys.length === 0) return
        for (let i = bodys.length - 1; i >= 0; i--) {
            gameBackground.removeChild<Element>(bodys[i])
        }
    }
    //当前蛇头的朝向
    //依据蛇头与身体数组的第一值就可以判断蛇的朝向, 即长方形的长的方向
    private headDirection(
        headCoor: Coor, 
        bodysFirstCoor: Coor = initialBodys[0]
    ): direction {
        if (headCoor.y === bodysFirstCoor.y) {
            if (headCoor.x < bodysFirstCoor.x) return LEFT
            return RIGHT
        } else {
            if (headCoor.y < bodysFirstCoor.y) return UP
            return DOWN
        }
    }
    //蛇头的移动 
    private move(action: direction, oldCoor: Coor): Coor {
        let {x, y} = oldCoor

        switch (action) {
            case LEFT:
                x -= width
                break
            case RIGHT:
                x += width
                break
            case UP:
                y -= height
                break
            case DOWN:
                y += height
                break
            default: break
        }
        this.opts.x = x
        this.opts.y = y
        this.removeHeadEle()
        this.removeBodysEle()
        this.renderHead()
        this.renderBody(oldCoor)
        this.headCollideBody()
        return {x, y}
    }
    //蛇头的移动过程中为nextActions添加动作
    bolsterMove(
        action: direction, 
        nextActions?: {}, 
        currentCoor: Coor = {x: this.opts.x, y: this.opts.y}
    ): void {
        nextActions = this.opts.nextActions || {RIGHT, DOWN, UP}
        const stopRender: boolean = this.preventBoundary(action, currentCoor)
        if (stopRender) {
            return
        } else {
            const isExist: boolean = this.existActionInNextActions(action, nextActions)
            if (isExist) {
                const newCoor: Coor = this.move(action, currentCoor) 
                if (typeof newCoor === 'undefined') return
                const headDirection: direction = this.headDirection(newCoor)
                nextActions = this.addActions(headDirection) 
                this.opts.nextActions = nextActions as direction 
            }
        }
    }
    //判断当前动作是否可以在nextActions中找到
    existActionInNextActions(action: direction, nextActions: any): boolean {
        for (const nextAction in nextActions) {
            if (action === nextActions[nextAction]) {
                return true
            }
        }
        return false
    }
    //边界的判断以及对出界时的阻止
   private preventBoundary(action: direction, coor: Coor): boolean {
       const {minBoundary, maxBoundaryX, maxBoundaryY} = Logical.minAndMaxBoundary()
       const {x, y} = coor
       let stopRender = false
       const Isstop: () => boolean = () => stopRender = !stopRender

       switch (action) {
            case UP:
                (y <= minBoundary) && Isstop() 
                break
            case DOWN:
                (y >= maxBoundaryY) && Isstop()
                break
            case LEFT:
                (x <= minBoundary) && Isstop()
                break
            case RIGHT:
                (x >= maxBoundaryX) && Isstop()
                break
            default: break 
       }
       stopRender && Logical.gameOverPanel("你撞墙了!")
       return stopRender
   }
    
    //为head上的添加动作
    private addActions(headDirection: direction): {} {
        const actionsX = {LEFT, RIGHT}
        const actionsY = {UP, DOWN}
        let actions = {}

        switch (headDirection) {
            case UP:
                actions = {UP, ...actionsX}
                break
            case DOWN: 
                actions = {DOWN, ...actionsX}
                break
            case LEFT:
                actions = {LEFT, ...actionsY}
                break
            case RIGHT:
                actions = {RIGHT, ...actionsY}
                break
            default: break 
        }
        return actions
    }

    //根据蛇身是否增长来改变身体坐标的数组
    dealHeadCoor(oldHeadCoor: Coor, bodysArr: SnakeBodys): SnakeBodys {
        const {x: headCurrentX, y: headCurrentY}  = this.opts

        //如果蛇头触界则蛇头的新旧坐标值应当相等， 所以蛇身数组不变更
        if (headCurrentX === oldHeadCoor.x && headCurrentY === oldHeadCoor.y) {
            return bodysArr
        } 
        //如果增长变更isGrow的值，跳过一次pop(), 否则正常在数组前插入head的老坐标，删除
        //数组最后一项
        this.isGrow
            ? this.isGrow = !this.isGrow
            : bodysArr.pop()
        bodysArr.unshift(oldHeadCoor)
        return bodysArr
    }
    //蛇头是否碰到蛇身， 如果碰到停止移动，弹出结束面板
    private headCollideBody(): void {
        const {x: currentHeadX, y: currentHeadY} = this.opts
        const bodys: SnakeBodys = initialBodys

        for (let val of bodys) {
            if (currentHeadX === val.x && currentHeadY === val.y) {
                Logical.gameOverPanel("你撞到自己了!")
            }
        }
    }
}