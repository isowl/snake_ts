import { amountCell } from './tools'
import { Cell, Food, Panel, SnakeBodys, SnakeHead } from './types'

//对于面板， 食物， 蛇的初始化
export const initialCell: Cell = {width: 40, height: 40} 
export const initialPanel: Panel = {width: 800, height: 800}
export const initialFood: Food = {x: 0, y: 0, backgroundColor: 'red'}
export const initialSnakeHead: SnakeHead = {x: 40, y: 0, backgroundColor: 'yellow', nextActions: null}
export const initialBodys: SnakeBodys = [
    {x: 0, y: 0},
    {x: 0, y: 40},
    {x: 0, y: 80}
] 

export const cells =  amountCell(initialPanel, initialCell)
