# Project-1: Frogger In Space
<h1>Brief</h1>

<p>Design a grid-based game using HTML, CSS and JavaScript  using knowledge gained from the first three weeks of the course. The game should be playbale for one player and the player must be able to win and lose.
Solo project.


Timeframe: 1 week.</p>
![function for frogger to move on the grid](https://github.com/JoanKalanzi/Project-1/blob/main/asserts/frogger.img.png?raw=true)

<h1>Deployment</h1>

<p>Please follow the link to play my game:</p>
<p>Repository link:</p>

<h1>Motivation</h1>

<p>As this was my first ever project using JavaScript. I wanted to replicate a classic arcade game that I enjoy playing, so choosing 'frogger' was no brainner. I chose a space theme as I believe that it reflected similarly to the 'frogger' storyline as both focus on adventures , overcoming various obstacles as they attempt to make it back to home.  </p>
<p> With frogger  under threat from numerious alien species, the aim of the game  is make it cross  different aliens  and battle spaceships safely with out losing all three lives. Along the way frogger  can use transportation spaceships to aid their jounery home.  </p>

<h1>Frameworks</h1>

<li> Languages</li>
<li> JavaScript</li>
<li> CSS3</li>
<li> HTML5</li>
<li> VS Code</li>
<li> Chrome</li>
<li> Browser</li>
<li>Git and GitHub</li>

<h1>Process</h1>
<p>The first stages of implementing the game were creating a grip on the page and writing functionlity that enable keyboard movement for frogger. This was achieved using a for loop to create the grid and if statements to move  frogger around the grid. </p>

![function for frogger to move on the grid](https://github.com/JoanKalanzi/Project-1/blob/main/asserts/keyboardMovement.png?raw=true)

<p>After frogger was successfully able to moving around the grid , I proceed onto adding aliens and battleships. at this stage , I had add funcitionality that enable both the aliens and battleship to move in a loop in their dedicated columns. This was achieved using set interval function. You can see this in the moveItem function below.</p>

![setinterval function](https://github.com/JoanKalanzi/Project-1/blob/main/asserts/setInterval.png?raw=true)

<p>After this was tested successfylly, I was able to implement obstacles functions to see if frogger hit any of the obstacles that would make it loss a live and return to startingPostion</p>

![obstacle function](https://github.com/JoanKalanzi/Project-1/blob/main/asserts/Obstacles.png?raw=true)

<p>MVP took 6 days to reach, and after I was happy with the functionality of the game. I decided to spread the last day on styling.</p>
<h1>Challenges</h1>
<p>There were many challenges I faced during this project. I first  had trouble with showing frogger geting home. In the end, I decided to showcase by changing the picture of frogger to a homeplanet and set a pop alert to tell the player that they have reached Home.</p>
<p>However, the most challenging aspect of this project was formulating logic for when frogger is flying in the spaceship, meaning frogger and spaceship are in the same cell on the grid, frogger had to display and new spaceship image in the same cell position that frogger was. and also, the new spaceship had to continue in the same set interval as the previous spaceship. Also, I had to make sure that when the player pressed any keycodes, frogger will reppear in a new position and the newspaceship will disappear.</p>
<p>To achieve this I called the added  spaceShipOne, then created a setInetrval function that removed it, this achieved the moving of the spaceShip.Then added if statement to the moveSpaceShip function that checks if the currentFrogPosition is not in the same position as the movingSpaceOne, this will then check each cell and remove frogInSpace from the ClassList(see example below) </p>
<pre>  
   function moveSpaceship() {
    addSpaceShipOne(spaceShipOne)
    setInterval(function () {
      removeSpaceShipone(movingSpaceShipOne)
      if (currentFrogPosition !== movingSpaceShipOne) {
        cells.forEach(cell => cell.classList.remove('frogInSpace'))
      }
    
  }</pre>
  
  
<h1>Wins</h1>
<p>There are many aspects of this game that I can say that I am proud of  such as the construction of the grid and the implementation of frogger returning to startingPostion when hit. However, the area I am most pleased with is the moveSpaceShip function.This function allowed the flogger to be in the same postion as the moving spaceship



</p>
<pre>  
if (currentFrogPosition === movingSpaceShipOne) {
        console.log('same position')
        removeSpaceShipone(movingSpaceShipOne)

        addFrogInSpaceship(movingSpaceShipOne)
        score += 100
        scoreDisplay.innerText = score
        removeFrog(currentFrogPosition)
        console.log('add frog')
        removeFrogOnLog(movingSpaceShipOne)
        //  removeFrogOnLog
        if (currentFrogPosition === 43) {
          removeFrogOnLog(currentFrogPosition)
          currentFrogPosition = spaceShipOne
          removeFrogOnLog(currentFrogPosition)
        }
        currentFrogPosition++
        addFrogInSpaceship(currentFrogPosition)
      }
      if (movingSpaceShipOne === 43) {
        removeSpaceShipone(movingSpaceShipOne)
        movingSpaceShipOne = spaceShipOne
        removeSpaceShipone(movingSpaceShipOne)
      }
      movingSpaceShipOne++
      addSpaceShipOne(movingSpaceShipOne)

    }, 1000);
  }</pre>
  
  <h1>Key Learnings</h1>
  <p>As this was my first project on the course, I am very pleased on the work that I achieved in the 7 days. I was able to learn about EventListener, for loops , setIntervals,</p>
