import { Timer } from "./timer.js"
import { Events } from "./events.js"
import { Sound } from "./sounds.js"
import { DarkMode } from "./darkMode.js"

import {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonIncrementMinutes,
  buttonDecrementMinutes,
  forestCard,
  rainCard,
  coffeeTableCard,
  firePlaceCard,
  btnPlayPath,
  btnStopPath,
  btnPlusPath,
  btnMinusPath,
  forestPath,
  rainPath,
  coffeeTablePath,
  firePlacePath,
} from "./elements.js"


const timer = Timer({
  minutesDisplay,
  secondsDisplay,
})

const events = Events({
  minutesDisplay,
})

const sound = Sound()

DarkMode({
  minutesDisplay,
  secondsDisplay,
  btnPlayPath,
  btnStopPath,
  btnPlusPath,
  btnMinusPath,
  forestPath,
  rainPath,
  coffeeTablePath,
  firePlacePath,
  forestCard,
  rainCard,
  coffeeTableCard,
  firePlaceCard,
})


buttonPlay.addEventListener("click", function (){
  timer.countdown()
})

buttonStop.addEventListener("click", function(){
  timer.stopTimer()
})

buttonIncrementMinutes.addEventListener("click", function(){
  events.incrementMinutes()
})

buttonDecrementMinutes.addEventListener("click", function(){
  events.decrementMinutes()
})


forestCard.addEventListener("mouseover", function(){
  sound.forestSound.play()
})

forestCard.addEventListener("mouseout", function(){
  sound.forestSound.pause()
})

rainCard.addEventListener("mouseover", function(){
  sound.rainSound.play()
})

rainCard.addEventListener("mouseout", function(){
  sound.rainSound.pause()
})

coffeeTableCard.addEventListener("mouseover", function(){
  sound.coffeeTableSound.play()
})

coffeeTableCard.addEventListener("mouseout", function(){
  sound.coffeeTableSound.pause()
})

firePlaceCard.addEventListener("mouseover", function(){
  sound.firePlaceSound.play()
})

firePlaceCard.addEventListener("mouseout", function(){
  sound.firePlaceSound.pause()
})


