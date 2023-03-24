import { Timer } from "./timer.js"
import { DarkMode } from "./darkMode.js"
import { Controls } from "./controls.js"


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
  forestVol,
  rainVol,
  coffeeTableVol,
  firePlaceVol,
  
  
} from "./elements.js"


const timer = Timer({
  minutesDisplay,
  secondsDisplay,
})

const controls = Controls({
  forestCard,
  rainCard,
  coffeeTableCard,
  firePlaceCard,
  forestPath,
  rainPath,
  coffeeTablePath,
  firePlacePath,
  inputForest,
  inputRain,
  inputCoffeeTable,
  inputFirePlace,
})

DarkMode({
  minutesDisplay,
  secondsDisplay,
  btnPlayPath,
  btnStopPath,
  btnPlusPath,
  btnMinusPath,
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

forestCard.addEventListener("click", function(){
  controls.forestCardControl()
})

rainCard.addEventListener("click", function(){
 controls.rainCardControl()
})

coffeeTableCard.addEventListener("click", function(){
  controls.coffeeTableCardControl()
})

firePlaceCard.addEventListener("click", function(){
  controls.firePlaceCardControl()
})

//volume events
forestVol.addEventListener("change", function(){
  controls.forestVolume()
})

rainVol.addEventListener("change", function(){
  controls.rainVolume()
})

coffeeTableVol.addEventListener("change", function(){
  controls.coffeeTableVolume()
})

firePlaceVol.addEventListener("change", function(){
  controls.firePlaceVolume()
})



