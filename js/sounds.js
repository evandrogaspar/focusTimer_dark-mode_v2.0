
export function Sound(){
  const forestSound = new Audio("./assets/Floresta.wav")
  const rainSound = new Audio("./assets/Chuva.wav")
  const coffeeTableSound = new Audio("./assets/Cafeteria.wav")
  const firePlaceSound = new Audio("./assets/Lareira.wav")

  forestSound.loop = true
  rainSound.loop = true
  coffeeTableSound.loop = true
  firePlaceSound.loop = true

  return {
    forestSound,
    rainSound,
    coffeeTableSound,
    firePlaceSound,
  }

}


