import { Timer } from "./timer.js"
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
  inputForest,
  inputRain,
  inputCoffeeTable,
  inputFirePlace,
  
} from "./elements.js"


const timer = Timer({
  minutesDisplay,
  secondsDisplay,
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
  inputForest,
  inputRain,
  inputCoffeeTable,
  inputFirePlace,

})

buttonPlay.addEventListener("click", function (){
  timer.countdown()
})

buttonStop.addEventListener("click", function(){
  timer.stopTimer()
})

buttonIncrementMinutes.addEventListener("click", function(){
  timer.incrementMinutes()
})

buttonDecrementMinutes.addEventListener("click", function(){
  timer.decrementMinutes()
})

//sound events
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


