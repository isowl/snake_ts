import Food from './food';
import { gameOverPanel, msg, res, score } from './index';
import { initialCell, initialPanel } from "./initial";
import Snake from './snake';
import { amountCell } from "./tools";
import { direction } from './types';

const {RIGHT} = direction 

export default class {
    private static defaultScore = 0 
    private static autoFunc: NodeJS.Timer 
    private static autoOldAction: direction | null = null

    //确定游戏面板的最小最大边界值
    static minAndMaxBoundary () {
        const {width, height} = initialCell
        const {amountX, amountY} = amountCell(initialPanel, initialCell)
        const maxBoundaryX = (amountX - 1) * width
        const maxBoundaryY = (amountY - 1) * height

        return {
            minBoundary: 0,
            maxBoundaryX,
            maxBoundaryY
        }
    }
    //分数增长
    private static score(): number {
        return this.defaultScore += 10
    }
    //判断snake的坐标值是否等于food 的坐标值,以此来判断是否吃食物
    static eat(snake: Snake, food: Food, scoreNode: HTMLDivElement = score): boolean {
        const {x: snakeX, y: snakeY} = snake.opts
        const {x: foodX, y: foodY} = food.opts

        if (snakeX === foodX && snakeY === foodY)  {
            food.foodRemove()
            scoreNode.innerHTML = 'score: ' + this.score()
            food.createFood()
            snake.isGrow = true
            return true
        }
        return false
    }
    //为当前静态属性autoFunc 绑定一个定时器    在一个方向上自动移动并处理动作的变更
    static autoMove(snake: Snake, food: Food, newAction: direction = RIGHT): void {
        //判断传入的新动作是否与上一次的动作相等，如果相等，直接执行bolsterMover函数
        //和eat函数，跳过对定时器的检测和变更
        if (this.autoOldAction === newAction) {
            snake.bolsterMove(newAction)
            this.eat(snake, food)
            return
        } 
        this.autoOldAction = newAction

        const timer = () => {
            this.autoFunc = setInterval(() => {
                snake.bolsterMove(newAction)
                this.eat(snake, food)
            }, 500)
        } 
        if (this.autoFunc === undefined) {
            timer()
        } else {
            clearInterval(this.autoFunc)
            timer()
        }
    }
    //过滤自动移动过程中反向动作
    static compare(snake: Snake, action: direction): boolean {
        const nextActions = snake.opts.nextActions

        if (nextActions === null) return true
        if (snake.existActionInNextActions(action, nextActions)) {
            return true
        }
        return false
    }
    //游戏结束面板弹出
    static gameOverPanel(reason: string): void {
        gameOverPanel.style.visibility = 'visible'
        msg.innerHTML = reason 
        if (res.previousElementSibling === null) return
        res.previousElementSibling.innerHTML = 'score: ' + this.defaultScore
        res.addEventListener('click', function() {
            location.reload()
        })
        clearInterval(this.autoFunc)
        document.onkeydown = null 
    }
}