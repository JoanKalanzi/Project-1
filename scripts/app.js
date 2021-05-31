function init() { 
 const grid = document.querySelector('.grid')
 const startButton = document.querySelector('#start') 
 const scoreDisplay = document.querySelector('#score-display') 
 const TimeDisplay = document.querySelector('#time-display')

 const width = 11
 const cellCount = width * width
 const cells = []
 const startingFrogPosition = 115
 let currentFrogPosition = 115
 const frogClass = 'frog'
 const lilyClass ='lilyPad'
 
//  let TimerID // variable to store the timer id
//  let remainingTime   // to set how long the game should run for
 let score = 0  // start score at 0

 
 const postionLilyOne = 5
 const positionLilyTwo = 2
 const positionLilyThree = 8
 const carLeftClass = 'carLeft'
 const leftCarOne = 109
 let leftMovingCar = 109
//  let leftCarTwo = 101
//  let leftCarThree= 103

  function createGrid(startingFrogPosition){
      for (let i = 0; i < cellCount; i++){
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
      } 
  
      addFrog(startingFrogPosition)
      addLilyPadOne(postionLilyOne)
      addLilyPadTwo(positionLilyTwo)
      addLilyPadThree(positionLilyThree)
      // addCar(leftCarOne)
      // removeCar(leftCarOne)
      moveCar()
 }
  function addFrog(position){
   cells[position].classList.add(frogClass)
   console.log('frog->',position)
  }
  function removeFrog(position) {
   cells[position].classList.remove(frogClass)
  }

  function handleKeyUp(event) {
       const key = event.keyCode
       removeFrog(currentFrogPosition)

       if(key === 39 && currentFrogPosition % width !== width -1) { 
        currentFrogPosition ++

       } else if( key === 37 && currentFrogPosition % width !== 0) {
      
       currentFrogPosition--
       } else if( key === 38 && currentFrogPosition >= width){
       console.log('moving->',currentFrogPosition)
       currentFrogPosition -= width
       } else if(key === 40  && currentFrogPosition + width <= width * width -1) {
      
       currentFrogPosition += width
      } else {
        console.log('INVALID KEY')
      }
      if(currentFrogPosition === postionLilyOne) {
       score += 100 
       scoreDisplay.innerText = score  
      }else if(currentFrogPosition === positionLilyTwo){
       score += 100 
       scoreDisplay.innerText = score 
      } else if(currentFrogPosition === positionLilyThree){
       score += 100 
       scoreDisplay.innerText = score 
      }else if(currentFrogPosition ===leftCarOne){
       console.log('You got hit!')
       
      }
      addFrog(currentFrogPosition)
  }
  function addLilyPadOne (placementOne){
    cells[placementOne].classList.add('lilyPad')
  }
  function addLilyPadTwo(placementTwo) {
    cells[placementTwo].classList.add('lilyPad')
  }
  function addLilyPadThree(placementThree) {
    cells[placementThree].classList.add('lilyPad')
  }
  function addCar (index){
   cells[index].classList.add('carLeft')
   console.log('add car', addCar)
  }

  function removeCar (index){
    cells[index].classList.remove('carLeft') 
   
    console.log('removed car', removeCar)

  }
  function moveCar() {
    addCar(leftCarOne);
    setInterval(function(){ 
      removeCar(leftMovingCar)
      
      if(leftMovingCar === 99) {
        removeCar(leftMovingCar)
        leftMovingCar = leftCarOne
        removeCar(leftMovingCar)  
      }
      leftMovingCar --
      addCar(leftMovingCar)
    }, 2000);
  }

// * we have 2 types and the first is setTimeout, they both come from the window
// * setTimeout -> Delaying the execution of some code
// * Execute some code ONCE, after a specified amount of time
// * Do this example first and show in the console
// const myFirstTimer = setTimeout(() => {
//   console.log('Hello after 1 second')
// }, 1000)
// * The 2nd one is setInterval and this will
// * Execute some code on a timer repeating
// * Need to store timers in a variable in order to access the timers id, in order to clear it
// * It is a function that takes 2 arguments, first is a function, second is the time itself in milliseconds 
// * basic example:
// const mySecondTimer = setInterval(() => {
//   console.log('Hello every 1 second')
// }, 1000)
// console.log('myFirstTimer ->', myFirstTimer)
// console.log('mySecondTimer ->', mySecondTimer)
// const myOtherTimer = setInterval(function () {
//   console.log('Running every second')
// }, 1000)
// const myFinalTimer = setInterval(myTimerFunction, 1000)
// function myTimerFunction() {
//   console.log('I am running')
// }


  document.addEventListener('keyup', handleKeyUp)
  createGrid(startingFrogPosition)
}
  window.addEventListener('DOMContentLoaded', init)