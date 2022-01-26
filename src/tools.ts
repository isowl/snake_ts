import { Cell, Panel } from './types'
//获取随机整数
export const getRandomInt = function (min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}
//获取随机rgb值
export const getRandomColor = function (): string {
    type RGB = [number, number, number] 
    const color: RGB = [0, 0, 0] 
    for (let i = 0; i < color.length; i++) {
        color[i] = getRandomInt(0, 255)
    }
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
}
//计算x,y轴上的单元格数量
export const amountCell = function (panel: Panel, cell: Cell) {
    const amountX = panel.width / cell.width
    const amountY = panel.height /cell.height

    return { amountX, amountY }
}