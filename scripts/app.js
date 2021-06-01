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
 const carRightClass = 'carRight'
 const carRightTwoClass = 'carLeftTwo'
 const carLeftThirdClass ='carLeftThree'
 const carTwoRightClass = 'carRightTwo'
 const leftCarOne = 109
 let leftMovingCar = 109
 const rightCarStart = 88
 let rightMovingCar = 88
 const carTwoStart = 107
 let leftCarTwoMove = 107
 const leftCarThree = 105
 let leftCarThreeMove =105
 const rightCarTwoStart = 90
 let carMovingRight = 90

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
      
      moveCar()
      moveCarRight()
      moveSecondCarRight()
      moveThirdCarLeft()
      moveThirdCar()
      
      
  }
  function addFrog(position){
   cells[position].classList.add('frog')
  //  console.log('frog->',position)
  }
  function removeFrog(position) {
    // console.log('inside frog function')
   cells[position].classList.remove('frog')
  
  }

  function handleKeyUp(event) {
       const key = event.keyCode
       removeFrog(currentFrogPosition)

       if(key === 39 && currentFrogPosition % width !== width -1) { 
        currentFrogPosition ++

       } else if( key === 37 && currentFrogPosition % width !== 0) {
      
       currentFrogPosition--
       } else if( key === 38 && currentFrogPosition >= width){
      //  console.log('moving->',currentFrogPosition)
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
      }if(currentFrogPosition === leftMovingCar){
        removeFrog
        currentFrogPosition = startingFrogPosition
      } else if (currentFrogPosition === leftCarTwoMove){
        removeFrog
        currentFrogPosition = startingFrogPosition
      } else if(currentFrogPosition === rightMovingCar){
         console.log('you got hit')
         console.log ('removed frog',removeFrog)
         currentFrogPosition = startingFrogPosition
      } else if(currentFrogPosition === leftCarThreeMove){
         console.log('you got hit')
         console.log ('removed frog',removeFrog)
         currentFrogPosition = startingFrogPosition
      }if(currentFrogPosition === carMovingRight){
         console.log('you got hit')
         console.log ('removed frog',removeFrog)
         currentFrogPosition = startingFrogPosition
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
   
  //  console.log('add car', addCar)
  }
  
  function removeCar (index){
    cells[index].classList.remove('carLeft') 
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
      if(currentFrogPosition === leftMovingCar){
         removeFrog(currentFrogPosition)
         addFrog(startingFrogPosition)
         
      }
      
      
    }, 2000);
  }
  function addAnotherCar(car){
    cells[car].classList.add('carRight')
  }
  function removeAnotherCar(car){
    cells[car].classList.remove('carRight')
  }
  function moveCarRight() {
    addAnotherCar(rightCarStart);
    setInterval(function(){ 
      removeAnotherCar(rightMovingCar)
      
      if(rightMovingCar === 98) {
        removeAnotherCar(rightMovingCar)
        rightMovingCar = rightCarStart
        removeAnotherCar(rightMovingCar)  
      }
      rightMovingCar ++
      addAnotherCar(rightMovingCar)
      if(currentFrogPosition === rightMovingCar){
        removeFrog(currentFrogPosition)
         addFrog(startingFrogPosition)
      }
    }, 2000);
  }
  function addThirdLeftCar(two){
    cells[two].classList.add('carLeftTwo') 
  }
  function removeThirdLeftCar(two) {
    cells[two].classList.remove('carLeftTwo')
  }
  // add second car moving left
  function moveThirdCarLeft() {
    addThirdLeftCar(carTwoStart);
    setInterval(function(){ 
      removeThirdLeftCar(leftCarTwoMove)
      
      if(leftCarTwoMove === 99) {
        removeThirdLeftCar(leftCarTwoMove)
        leftCarTwoMove = carTwoStart
        removeThirdLeftCar(leftCarTwoMove)  
      }
      leftCarTwoMove --
      addThirdLeftCar(leftCarTwoMove)
      if(currentFrogPosition === leftCarTwoMove){
        removeFrog(currentFrogPosition)
         addFrog(startingFrogPosition)
      }
    }, 2000);
  }
// third car moving left !!!
  function addThirdCarLeft(three){
    cells[three].classList.add('carLeftThree') 
  }
  function removeThirdCarLeft(three){
    cells[three].classList.remove('carLeftThree') 
  }
  function moveThirdCar() {
    addThirdCarLeft(leftCarThree);
    setInterval(function(){ 
      removeThirdCarLeft(leftCarThreeMove)
      
      if(leftCarThreeMove === 99) {
        removeThirdCarLeft(leftCarThreeMove)
        leftCarThreeMove = leftCarThree
        removeThirdCarLeft(leftCarThreeMove)  
      }
      leftCarThreeMove --
      addThirdCarLeft(leftCarThreeMove)
      if(currentFrogPosition === leftCarThreeMove){
        removeFrog(currentFrogPosition)
         addFrog(startingFrogPosition)
      }
    }, 2000);
  }
  function addSecondCarRight(right){
    cells[right].classList.add('carRightTwo') 
  }
  function removeSecondCarRight(right){
    cells[right].classList.remove('carRightTwo') 
  }
  function moveSecondCarRight() {
    addSecondCarRight(rightCarTwoStart)
    setInterval(function(){ 
      removeSecondCarRight(carMovingRight)
      
      if(carMovingRight === 98) {
        removeSecondCarRight(carMovingRight)
        carMovingRight = rightCarTwoStart
        removeSecondCarRight(carMovingRight)
      }
      carMovingRight ++
      addSecondCarRight(carMovingRight)
      if(currentFrogPosition === carMovingRight){
        removeFrog(currentFrogPosition)
         addFrog(startingFrogPosition)
      }
    }, 2000);
  }
  // addSecondCarRight(rightCarTwoStart)
      // removeSecondCarRight(rightCarTwoStart)
    document.addEventListener('keyup', handleKeyUp)
     createGrid(startingFrogPosition)
}
  window.addEventListener('DOMContentLoaded', init)