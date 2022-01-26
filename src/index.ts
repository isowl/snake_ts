import Food from './food'
import eventFunc from './keyevent'
import './less/style.less'
import snake from './snake'

//创建游戏主面板
export const gameBackground: HTMLDivElement = document.createElement('div')
gameBackground.setAttribute('id', 'gameBackground')
document.body.appendChild(gameBackground)
//创建游戏结束的面板
export const gameOverPanel: HTMLDivElement = document.createElement("div")
gameOverPanel.setAttribute("id", 'gameOverPanel')
gameBackground.appendChild(gameOverPanel)
//创建分数栏
export const score: HTMLDivElement = document.createElement("div")
score.setAttribute("id", 'score')
score.appendChild(document.createTextNode("score: 0"))
gameBackground.appendChild(score)

//创建‘GAME OVER’ 字样
const gameover: HTMLDivElement = document.createElement("div")
gameover.appendChild(document.createTextNode('GAME OVER'))
//创建游戏结束面板上的分数栏
const gameoverScore: HTMLDivElement = document.createElement("div")
gameoverScore.appendChild(document.createTextNode("score: 0"))
//创建‘restart' 按钮
export const res: HTMLDivElement = document.createElement('div')
res.setAttribute('id', 'res')
res.appendChild(document.createTextNode('restart'))
//游戏结束原因
export const msg: HTMLDivElement = document.createElement("div")
msg.setAttribute('id', 'msg')
msg.appendChild(document.createTextNode(""))

gameOverPanel.appendChild(msg)
gameOverPanel.appendChild(gameover)
gameOverPanel.appendChild(gameoverScore)
gameOverPanel.appendChild(res)



const rat = new Food()
rat.createFood()
const newSnake = new snake()
newSnake.renderHead() 
newSnake.renderBody()

eventFunc(newSnake, rat)