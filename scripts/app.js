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
 const leftCarOne = 100
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
  addCar(leftCarOne)
  
 }
  function addFrog(position){
   cells[position].classList.add(frogClass)
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
  }
    document.addEventListener('keyup', handleKeyUp)
    createGrid(startingFrogPosition)


 }
 window.addEventListener('DOMContentLoaded', init)