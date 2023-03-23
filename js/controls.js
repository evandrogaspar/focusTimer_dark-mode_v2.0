import { Sound } from "./sounds.js"

const sound = Sound()


export function Controls({
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
}){

  function forestCardControl(){
    forestCard.classList.toggle(".activeColors")

  if(forestCard.classList.contains(".activeColors")){
    forestCard.style.backgroundColor= "#02799D"
    forestPath.style.fill="white"
    inputForest.style.backgroundColor="White"
    inputForest.style.accentColor="white"
    sound.forestSound.play()
  }else{
        forestCard.style.backgroundColor="#E1E1E6"
        forestPath.style.fill="#323238"
        inputForest.style.backgroundColor="#323238"
        inputForest.style.accentColor="#323238"
        sound.forestSound.pause()
        
  }
  }

  function rainCardControl(){
    rainCard.classList.toggle(".activeColors")

  if(rainCard.classList.contains(".activeColors")){
    rainCard.style.backgroundColor= "#02799D"
    rainPath.style.fill="white"
    inputRain.style.backgroundColor="White"
    inputRain.style.accentColor="white"
    sound.rainSound.play()
  }else{
        rainCard.style.backgroundColor="#E1E1E6"
        rainPath.style.fill="#323238"
        inputRain.style.backgroundColor="#323238"
        inputRain.style.accentColor="#323238"
        sound.rainSound.pause()
  }
  }

  function coffeeTableCardControl(){
    coffeeTableCard.classList.toggle(".activeColors")

  if(coffeeTableCard.classList.contains(".activeColors")){
    coffeeTableCard.style.backgroundColor= "#02799D"
    coffeeTablePath.style.fill="white"
    inputCoffeeTable.style.backgroundColor="White"
    inputCoffeeTable.style.accentColor="white"
    sound.coffeeTableSound.play()
  }else{
    coffeeTableCard.style.backgroundColor="#E1E1E6"
    coffeeTablePath.style.fill="#323238"
    inputCoffeeTable.style.backgroundColor="#323238"
    inputCoffeeTable.style.accentColor="#323238"
    sound.coffeeTableSound.pause()
  }
  }
  
  function firePlaceCardControl(){
    firePlaceCard.classList.toggle(".activeColors")

    if(firePlaceCard.classList.contains(".activeColors")){
      firePlaceCard.style.backgroundColor= "#02799D"
      firePlacePath.style.fill="white"
      inputFirePlace.style.backgroundColor="White"
      inputFirePlace.style.accentColor="white"
      sound.firePlaceSound.play()
    }else{
     firePlaceCard.style.backgroundColor="#E1E1E6"
     firePlacePath.style.fill="#323238"
     inputFirePlace.style.backgroundColor="#323238"
     inputFirePlace.style.accentColor="#323238"
     sound.firePlaceSound.pause()
    }
  }
 
  return {
    forestCardControl,
    rainCardControl,
    coffeeTableCardControl,
    firePlaceCardControl,
  }

  
}