const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
const buttonPlay = document.querySelector(".play")
const buttonStop = document.querySelector(".stop")
const buttonIncrementMinutes = document.querySelector(".increment-minutes")
const buttonDecrementMinutes = document.querySelector(".decrement-minutes")
const forestCard = document.querySelector(".forest-card")
const rainCard = document.querySelector(".rain-card")
const coffeeTableCard = document.querySelector(".coffeeTable-card")
const firePlaceCard = document.querySelector(".firePlace-card")
const forestSound = new Audio("./assets/Floresta.wav")
const rainSound = new Audio("./assets/Chuva.wav")
const coffeeTableSound = new Audio("./assets/Cafeteria.wav")
const firePlaceSound = new Audio("./assets/Lareira.wav")


function updateTimerDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function stopTimer(){
  clearTimeout(timerTimeOut)
}


function countdown(){
 timerTimeOut = setTimeout(function(){
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)


    
    
    if(minutes <= 0 && seconds <= 0){
      updateTimerDisplay(25, 0)
      return 
    }

    if(seconds <= 0){
      seconds = 60
      --minutes
      
    }
    updateTimerDisplay(minutes, String(seconds - 1))
    
    
    countdown()
  }, 1000)
}

function incrementMinutes(){
  minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, "0")
}

function decrementMinutes(){
  if(minutesDisplay.textContent > 4){
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, "0")
  }else {
    minutesDisplay.textContent = String(Number(60)).padStart(2, "0")
  }

}



function forestSoundCard(){
  forestSound.play()
}

function forestSoundCardOff(){
  forestSound.pause()
}

function rainSoundCard(){
  rainSound.play()
}

function rainSoundCardOff(){
  rainSound.pause()
}

function coffeeTableSoundCard(){
  coffeeTableSound.play()
}

function coffeeTableSoundCardOff(){
  coffeeTableSound.pause()
}

function firePlaceSoundCard(){
  firePlaceSound.play()
}

function firePlaceSoundCardOff(){
  firePlaceSound.pause()
}


buttonPlay.addEventListener("click", countdown)
buttonStop.addEventListener("click", stopTimer)
buttonIncrementMinutes.addEventListener("click", incrementMinutes)
buttonDecrementMinutes.addEventListener("click", decrementMinutes)

forestCard.addEventListener("mouseover", forestSoundCard)
forestCard.addEventListener("mouseout", forestSoundCardOff)
rainCard.addEventListener("mouseover", rainSoundCard)
rainCard.addEventListener("mouseout", rainSoundCardOff)
coffeeTableCard.addEventListener("mouseover", coffeeTableSoundCard)
coffeeTableCard.addEventListener("mouseout", coffeeTableSoundCardOff)
firePlaceCard.addEventListener("mouseover", firePlaceSoundCard)
firePlaceCard.addEventListener("mouseout", firePlaceSoundCardOff)


