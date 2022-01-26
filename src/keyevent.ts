import Food from './food'
import Logical from './logical'
import Snake from './snake'
import { direction } from './types'

const {LEFT, RIGHT, UP, DOWN} = direction


export default function (snake: Snake, food: Food): void {
    Logical.autoMove(snake, food)

    document.onkeydown = function(e) {
        switch (e.key) {
            case "ArrowUp":
                Logical.compare(snake, UP) && Logical.autoMove(snake, food, UP)
                break
            case "ArrowDown":
                Logical.compare(snake, DOWN) && Logical.autoMove(snake, food, DOWN)
                break
            case "ArrowLeft":
                Logical.compare(snake, LEFT) && Logical.autoMove(snake, food, LEFT)
                break
            case "ArrowRight":
                Logical.compare(snake, RIGHT) && Logical.autoMove(snake, food, RIGHT)
                break
            default: break
        }
    }
}