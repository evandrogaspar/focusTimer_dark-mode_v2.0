export function Events({
  minutesDisplay,
}){

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

  return{
    incrementMinutes,
    decrementMinutes,
  }
}