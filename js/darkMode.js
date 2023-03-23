
export function DarkMode({
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
}){

const separationMinutesSeconds = document.querySelector(".separation-minutes-seconds")

const lightIcon = document.querySelector(".light-icon")
const darkIcon =document.querySelector(".dark-icon")


function switchLightDarkModes(){
  lightIcon.classList.toggle("hide")
  darkIcon.classList.toggle("hide")
}

lightIcon.addEventListener("click", function(){
  switchLightDarkModes()
  minutesDisplay.style.color ="#FFF"
  separationMinutesSeconds.style.color ="#FFF"
  secondsDisplay.style.color ="#FFF"
  btnPlayPath.style.fill = "#C4C4CC"
  btnStopPath.style.fill = "#C4C4CC"
  btnPlusPath.style.fill = "#C4C4CC"
  btnMinusPath.style.fill = "#C4C4CC"
  
  forestPath.style.fill = "##323238"
  rainPath.style.fill = "#323238"
  coffeeTablePath.style.fill ="##323238"
  firePlacePath.style.fill ="##323238"

  forestCard.style.backgroundColor = "#E1E1E6"
  rainCard.style.backgroundColor = "#E1E1E6"
  coffeeTableCard.style.backgroundColor = "#E1E1E6"
  firePlaceCard.style.backgroundColor = "#E1E1E6"

  document.body.style.backgroundColor = "#121214"
})

darkIcon.addEventListener("click", function(){
  switchLightDarkModes()
  minutesDisplay.style.color ="#323238"
  separationMinutesSeconds.style.color ="#323238"
  secondsDisplay.style.color =" #323238"

  btnPlayPath.style.fill = "#323238"
  btnStopPath.style.fill = "#323238"
  btnPlusPath.style.fill = "#323238"
  btnMinusPath.style.fill = "#323238"
  
  forestPath.style.fill = "#323238"
  rainPath.style.fill = "#323238"
  coffeeTablePath.style.fill ="#323238"
  firePlacePath.style.fill ="#323238"

  forestCard.style.backgroundColor = "#E1E1E6"
  rainCard.style.backgroundColor = "#E1E1E6"
  coffeeTableCard.style.backgroundColor = "#E1E1E6"
  firePlaceCard.style.backgroundColor = "#E1E1E6"

  document.body.style.backgroundColor = "#FFF"
})


}

