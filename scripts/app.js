function init() {
  const grid = document.querySelector('.grid')
  const startButton = document.querySelector('#start')
  const scoreDisplay = document.querySelector('#score-display')
  const livesDisplay = document.querySelector('#lives-display')
  const audio = document.querySelector('audio')

  const width = 11
  const cellCount = width * width
  const cells = []
  const startingFrogPosition = 115
  let currentFrogPosition = 115
  const frogClass = 'frog'
  const planetClass = 'home'
  const planetClass = 'frogHome'



  let frogTimer
  let livesRemaining = 3
  let score = 0


  const postionHomePlantOne = 5
  const postionHomePlanetTwo = 2
  const postionHomePlantThree = 8
  const carLeftClass = 'carLeft'
  const carRightClass = 'carRight'
  const carRightTwoClass = 'carLeftTwo'
  const carLeftThirdClass = 'carLeftThree'
  const carTwoRightClass = 'carRightTwo'
  const logClass = 'log'
  const logTwoClass = 'logTwo'
  const logThreeClass = 'logThree'
  const logFour = 'logFour'
  let frogOnLogClass = 'frogonlog'
  const battleShips = 87
  let movingAlien = 87
  const rightCarStart = 88
  let rightMovingCar = 88
  const carTwoStart = 85
  let movingAlienTwo = 85
  const leftCarThree = 83
  let leftCarThreeMove = 83
  const rightCarTwoStart = 90
  let carMovingRight = 90
  const logOne = 33
  let movinglogOne = 33
  const logTwoStart = 36
  let movingLogTwo = 36
  const logThreeStart = 54
  let movingLogThree = 54
  const logFourStart = 50
  let movingLogFour = 50


  function createGrid(startingFrogPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      grid.appendChild(cell)
      cells.push(cell)
    }

    addFrog(startingFrogPosition)
    addPlanetOne(postionHomePlantOne)
    addPlanetTwo(postionHomePlanetTwo)
    addPlanetThree(postionHomePlantThree)

    moveItem()
    MoveRight()
    moveItemRight()
    moveItemLeft()
    moveItemthreeLeft()
    moveSpaceship()
    moveSapceshipOneRight()
    moveSpaceshipTwoLeft()
    moveSpaceShipThreeRight()

  }
  function addFrog(position) {
    cells[position].classList.add('frog')
    //  console.log('frog->',position)
  }
  function removeFrog(position) {
    console.log('removed frog from current position')
    cells[position].classList.remove('frog')

  }
  function startGame() {
    console.log('click')
    console.log(' lives', livesRemaining)
    removeFrog(currentFrogPosition)
    console.log(' livesssss', livesRemaining)
    console.log('removed frog from current position')
    frogTimer = setInterval(function () {

      if (livesRemaining <= 0) {

        console.log('hello')
        alert('GAME OVER')
        alert(`You scored ${score}`)

        console.log('you scored this')
        clearInterval(frogTimer)
        clearInterval(score)

        return
      }


    }, 1000)
    addFrog(startingFrogPosition)
  }

  function handleKeyUp(event) {
    const key = event.keyCode
    removeFrog(currentFrogPosition)

    if (key === 39 && currentFrogPosition % width !== width - 1) {
      currentFrogPosition++

    } else if (key === 37 && currentFrogPosition % width !== 0) {

      currentFrogPosition--
    } else if (key === 38 && currentFrogPosition >= width) {
      
      currentFrogPosition -= width
    } else if (key === 40 && currentFrogPosition + width <= width * width - 1) {

      currentFrogPosition += width
    } else {
      console.log('INVALID KEY')
    }

    if (currentFrogPosition === postionHomePlantOne) {
      score += 100
      scoreDisplay.innerText = score
      removeFrog(currentFrogPosition)
      removePlanetOne(postionHomePlantOne)
      addPlanet(postionHomePlantOne)
      alert('You made to Home')
      if (livesRemaining > 0) { livesRemaining -= 1 }
      livesDisplay.innerText = livesRemaining


      currentFrogPosition = startingFrogPosition
    } else if (currentFrogPosition === postionHomePlanetTwo) {
      score += 100
      scoreDisplay.innerText = score
      removeFrog(currentFrogPosition)

      removePlanetTwo(postionHomePlanetTwo)

      addPlanet(postionHomePlanetTwo)
      alert('You made to Home')
      if (livesRemaining > 0) { livesRemaining -= 1 }
      livesDisplay.innerText = livesRemaining
      currentFrogPosition = startingFrogPosition
    } else if (currentFrogPosition === postionHomePlantThree) {
      score += 100
      scoreDisplay.innerText = score
      removeFrog(currentFrogPosition)

      removePlanetThree(postionHomePlantThree)

      addPlanet(postionHomePlantThree)
      alert('You made to Home')
      if (livesRemaining > 0) { livesRemaining -= 1 }
      livesDisplay.innerText = livesRemaining

      currentFrogPosition = startingFrogPosition
    } if (currentFrogPosition === movingAlien) {
      removeFrog
      score -= 50
      scoreDisplay.innerText = score
      if (livesRemaining > 0) { livesRemaining -= 1 }
      livesDisplay.innerText = livesRemaining
      currentFrogPosition = startingFrogPosition

    } else if (currentFrogPosition === movingAlienTwo) {
      removeFrog
      score -= 50
      scoreDisplay.innerText = score
      if (livesRemaining > 0) { livesRemaining -= 1 }
      livesDisplay.innerText = livesRemaining
      currentFrogPosition = startingFrogPosition
    } else if (currentFrogPosition === rightMovingCar) {

      console.log('you got hit')
      console.log('removed frog', removeFrog)
      score -= 50
      scoreDisplay.innerText = score
      if (livesRemaining > 0) { livesRemaining -= 1 }
      livesDisplay.innerText = livesRemaining
      currentFrogPosition = startingFrogPosition
    } else if (currentFrogPosition === leftCarThreeMove) {
      console.log('you got hit')
      console.log('removed frog', removeFrog)
      score -= 50
      scoreDisplay.innerText = score
      if (livesRemaining > 0) { livesRemaining -= 1 }
      livesDisplay.innerText = livesRemaining
      currentFrogPosition = startingFrogPosition
    } else if (currentFrogPosition === carMovingRight) {
      console.log('you got hit')
      console.log('removed frog', addFrog)
      score -= 50
      scoreDisplay.innerText = score
      if (livesRemaining > 0) { livesRemaining -= 1 }
      livesDisplay.innerText = livesRemaining
      currentFrogPosition = startingFrogPosition
    }

    addFrog(currentFrogPosition)
  }





  function addPlanetOne(placementOne) {
    cells[placementOne].classList.add('home')
  }
  function removePlanetOne(placementOne) {
    cells[placementOne].classList.remove('home')
    console.log('removed home')
  }
  function addPlanetTwo(placementTwo) {
    cells[placementTwo].classList.add('home')
  }
  function removePlanetTwo(placementTwo) {
    cells[placementTwo].classList.remove('home')
  }
  function addPlanetThree(placementThree) {
    cells[placementThree].classList.add('home')
  }
  function removePlanetThree(placementThree) {
    cells[placementThree].classList.remove('home')
  }
  function addItem(index) {
    cells[index].classList.add('carLeft')


  }

  function removeItem(index) {
    cells[index].classList.remove('carLeft')
  }


  function moveItem() {
    addItem(battleShips);
    setInterval(function () {
      removeItem(movingAlien)

      if (movingAlien === 77) {
        removeItem(movingAlien)
        movingAlien = battleShips
        removeItem(movingAlien)
      }
      movingAlien--
      addItem(movingAlien)
      if (currentFrogPosition === movingAlien) {
        removeFrog(currentFrogPosition)
        addFrog(startingFrogPosition)

      }


    }, 2000);
  }
  function addAnotherCar(car) {
    cells[car].classList.add('carRight')
  }
  function removeAnotherCar(car) {
    cells[car].classList.remove('carRight')
  }
  function MoveRight() {
    addAnotherCar(rightCarStart);
    setInterval(function () {
      removeAnotherCar(rightMovingCar)

      if (rightMovingCar === 98) {
        removeAnotherCar(rightMovingCar)
        rightMovingCar = rightCarStart
        removeAnotherCar(rightMovingCar)
      }
      rightMovingCar++
      addAnotherCar(rightMovingCar)
      if (currentFrogPosition === rightMovingCar) {
        removeFrog(currentFrogPosition)
        addFrog(startingFrogPosition)
      }
    }, 2000);
  }
  function addThirdLeftCar(two) {
    cells[two].classList.add('carLeftTwo')
  }
  function removeThirdLeftCar(two) {
    cells[two].classList.remove('carLeftTwo')
  }

  function moveItemLeft() {
    addThirdLeftCar(carTwoStart);
    setInterval(function () {
      removeThirdLeftCar(movingAlienTwo)

      if (movingAlienTwo === 77) {
        removeThirdLeftCar(movingAlienTwo)
        movingAlienTwo = carTwoStart
        removeThirdLeftCar(movingAlienTwo)
      }
      movingAlienTwo--
      addThirdLeftCar(movingAlienTwo)
      if (currentFrogPosition === movingAlienTwo) {
        removeFrog(currentFrogPosition)
        addFrog(startingFrogPosition)
      }
    }, 2000);
  }

  function addThirdCarLeft(three) {
    cells[three].classList.add('carLeftThree')
  }
  function removeItemLeft(three) {
    cells[three].classList.remove('carLeftThree')
  }
  function moveItemthreeLeft() {
    addThirdCarLeft(leftCarThree);
    setInterval(function () {
      removeItemLeft(leftCarThreeMove)

      if (leftCarThreeMove === 77) {
        removeItemLeft(leftCarThreeMove)
        leftCarThreeMove = leftCarThree
        removeItemLeft(leftCarThreeMove)
      }
      leftCarThreeMove--
      addThirdCarLeft(leftCarThreeMove)
      if (currentFrogPosition === leftCarThreeMove) {
        removeFrog(currentFrogPosition)
        addFrog(startingFrogPosition)
      }
    }, 2000);
  }
  function addSecondCarRight(right) {
    cells[right].classList.add('carRightTwo')
  }
  function removeSecondCarRight(right) {
    cells[right].classList.remove('carRightTwo')
  }
  function moveItemRight() {
    addSecondCarRight(rightCarTwoStart)
    setInterval(function () {
      removeSecondCarRight(carMovingRight)

      if (carMovingRight === 98) {
        removeSecondCarRight(carMovingRight)
        carMovingRight = rightCarTwoStart
        removeSecondCarRight(carMovingRight)
      }
      carMovingRight++
      addSecondCarRight(carMovingRight)
      if (currentFrogPosition === carMovingRight) {
        removeFrog(currentFrogPosition)
        addFrog(startingFrogPosition)
      }
    }, 2000);
  }
  function addLogOne(one) {
    cells[one].classList.add('log')
  }
  function removeLogOne(one) {
    cells[one].classList.remove('log')
  }
  function addFrogOnLog(el) {
    cells[el].classList.add('frogonlog')
    console.log('adding frog on log')
  }
  function removeFrogOnLog(el) {
    cells[el].classList.remove('frogonlog')
  }
  // ADDING logs!!
  function moveSpaceship() {
    addLogOne(logOne)
    setInterval(function () {
      removeLogOne(movinglogOne)
      if (currentFrogPosition !== movinglogOne) {
        cells.forEach(cell => cell.classList.remove('frogonlog'))
      }
      if (currentFrogPosition === movinglogOne) {
        console.log('same position')
        removeLogOne(movinglogOne)

        addFrogOnLog(movinglogOne)
        score += 100
        scoreDisplay.innerText = score
        removeFrog(currentFrogPosition)
        console.log('add frog')
        removeFrogOnLog(movinglogOne)
        //  removeFrogOnLog
        if (currentFrogPosition === 43) {
          removeFrogOnLog(currentFrogPosition)
          currentFrogPosition = logOne
          removeFrogOnLog(currentFrogPosition)
        }
        currentFrogPosition++
        addFrogOnLog(currentFrogPosition)
      }
      if (movinglogOne === 43) {
        removeLogOne(movinglogOne)
        movinglogOne = logOne
        removeLogOne(movinglogOne)
      }
      movinglogOne++
      addLogOne(movinglogOne)

    }, 1000);
  }
  // need to add some about the frog floating with the log
  function addLogTwo(two) {
    cells[two].classList.add('logTwo')
  }
  function removeLogTwo(two) {
    cells[two].classList.remove('logTwo')
  }
  function moveSapceshipOneRight() {
    addLogTwo(logTwoStart)
    setInterval(function () {
      removeLogTwo(movingLogTwo)
      if (currentFrogPosition !== movingLogTwo) {
        cells.forEach(cell => cell.classList.remove('frogonlog'))
      }
      if (currentFrogPosition === movingLogTwo) {
        removeLogTwo(movingLogTwo)
        addFrogOnLog(movingLogTwo)
        score += 100
        scoreDisplay.innerText = score
        removeFrog(currentFrogPosition)
        removeFrogOnLog
        removeFrogOnLog(movingLogTwo)

        if (currentFrogPosition === 43) {
          removeFrogOnLog(currentFrogPosition)
          currentFrogPosition = logTwoStart
          removeFrogOnLog(currentFrogPosition)
        }
        currentFrogPosition++
        addFrogOnLog(currentFrogPosition)
      }
      if (movingLogTwo === 43) {
        removeLogTwo(movingLogTwo)
        movingLogTwo = logTwoStart
        removeLogTwo(movingLogTwo)
      }
      movingLogTwo++
      addLogTwo(movingLogTwo)

    }, 1000);
  }
  //  new log on the line starting  54
  function addLogLeft(three) {
    cells[three].classList.add('logThree')
  }
  function removeLogLeft(three) {
    cells[three].classList.remove('logThree')
  }
  function moveSpaceshipTwoLeft() {
    addLogLeft(logThreeStart)
    setInterval(function () {
      removeLogLeft(movingLogThree)
      if (currentFrogPosition !== movingLogThree) {
        cells.forEach(cell => cell.classList.remove('frogonlog'))
      }
      if (currentFrogPosition === movingLogThree) {
        removeLogLeft(movingLogThree)
        addFrogOnLog(movingLogThree)
        score += 100
        scoreDisplay.innerText = score
        removeFrog(currentFrogPosition)
        removeFrogOnLog
        removeFrogOnLog(movingLogThree)

        if (currentFrogPosition === 44) {
          removeFrogOnLog(currentFrogPosition)
          currentFrogPosition = logThreeStart
          removeFrogOnLog(currentFrogPosition)
        }
        currentFrogPosition--
        addFrogOnLog(currentFrogPosition)

      }
      if (movingLogThree === 44) {
        removeLogLeft(movingLogThree)
        movingLogThree = logThreeStart
        removeLogLeft(movingLogThree)
      }
      movingLogThree--
      addLogLeft(movingLogThree)


    }, 1000);
  }
  //  adding the last log moving Right
  function addLogLeftTwo(four) {
    cells[four].classList.add('logFour')
  }
  function removeLogleftTwo(four) {
    cells[four].classList.remove('logFour')
  }
  function moveSpaceShipThreeRight() {
    addLogLeftTwo(logFourStart)
    setInterval(function () {
      removeLogleftTwo(movingLogFour)
      if (currentFrogPosition !== movingLogFour) {
        cells.forEach(cell => cell.classList.remove('frogonlog'))
      }
      if (currentFrogPosition === movingLogFour) {
        removeLogleftTwo(movingLogFour)
        addFrogOnLog(movingLogFour)
        score += 100
        scoreDisplay.innerText = score
        removeFrog(currentFrogPosition)
        // removeFrogOnLog
        removeFrogOnLog(movingLogFour)
        if (currentFrogPosition === 44) {
          removeFrogOnLog(currentFrogPosition)
          currentFrogPosition = logFourStart
          removeFrogOnLog(currentFrogPosition)
        }
        currentFrogPosition--
        addFrogOnLog(currentFrogPosition)

      }
      if (movingLogFour === 44) {
        removeLogleftTwo(movingLogFour)
        movingLogFour = logFourStart
        removeLogleftTwo(movingLogFour)
      }
      movingLogFour--
      addLogLeftTwo(movingLogFour)
    }, 1000);
  }

  function addPlanet(net) {
    cells[net].classList.add('frogHome')
    console.log(net)
  }
  function removePlanet(net) {
    cells[net].classList.remove('frogHome')
  }


  startButton.addEventListener('click', startGame)



  document.addEventListener('keyup', handleKeyUp)
  createGrid(startingFrogPosition)

}
window.addEventListener('DOMContentLoaded', init)