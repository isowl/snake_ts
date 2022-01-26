//单元的大小
export interface Cell {
    width: number,
    height: number
}
//面板的大小
export interface Panel extends Cell {}

//蛇头的属性
export interface SnakeHead {
    x: number,
    y: number,
    backgroundColor: string,
    nextActions: direction | null
}
export interface Coor {
    x: number,
    y: number
}
//蛇的身体坐标
export type SnakeBodys = Array<Coor> 

//食物的属性
export interface Food {
    x: number,
    y: number,
    backgroundColor: string
}
//四个方向的枚举
export enum direction {
    LEFT,
    RIGHT,
    UP,
    DOWN
}