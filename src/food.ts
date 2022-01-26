import { gameBackground } from './index'
import { cells, initialCell, initialFood } from './initial'
import { getRandomColor, getRandomInt } from './tools'
import { Food } from './types'

export default class {
    constructor (public opts: Food = initialFood) {}    
    //食物在面板上的随机位置与背景色
    private randomPlace() {
        this.opts.x = getRandomInt(0, cells.amountX) * initialCell.width 
        this.opts.y = getRandomInt(0, cells.amountY) * initialCell.height
        this.opts.backgroundColor = getRandomColor()

        return {
            x: this.opts.x,
            y: this.opts.y
        }
    }
    //创建一个随机颜色随机位置的食物
    createFood (): void {
        const {width, height} = initialCell
        const {x, y} = this.randomPlace()
        const newNode: HTMLDivElement = document.createElement('div')
        newNode.setAttribute('id', 'food')
        newNode.style.cssText = `
            position: absolute;
            top: ${y}px;
            left: ${x}px;
            z-index: 2;
            width: ${width}px;
            height: ${height}px;
            background-color: ${getRandomColor()};
            line-height: ${height}px;
            text-align: center;
        ` 
        gameBackground.appendChild(newNode)
    }
    //食物的移除
    foodRemove(): void {
        const food: HTMLElement | null = document.getElementById('food')

        if (food === null) {
            return
        } else {
            gameBackground.removeChild<HTMLElement>(food)
        }
    }
}