let canvas = document.getElementById('snake')
    // Context renders the design that will appear inside canvas. The 2d says that it will be handled as a 2d plane
let context = canvas.getContext('2d')
let box = 32
    //Here we created the array and gave it a size
let snake = []
snake[0] = {
        x: 8 * box,
        y: 8 * box
    }
    //This is direction from which the snake will appear
let direction = 'right'
let food = {
        //As we need the food to appear randomly we've got to have two animations to create randoms numbers
        //Math.floor takes away the floating part of the Math.random, which returns a random number untill 1 and the Math.floor takes away the zero dot (0.,) which come with Math.random
        //Here it`s set to 16 and the canvas size (box)
        //Now, we need to pass the positions in the context.fillRect()
        x: Math.floor(Math.random() * 15 + 1) * box,
        y: Math.floor(Math.random() * 15 + 1) * box
    }
    // This function designs and defines. First function created
function createBG() {
    // Here the context variable is receiving a color. fillStyle handles the style of the canvas/context
    context.fillStyle = 'lightgreen'
        //fillRect designs the rectangle where the game happens. It handles 4 parameters: x and y position, height and width. The game will be displayed in little squares so 32px for each little square is ok. So canvas has the width and height of 16 little squares as the size of the box variable.
    context.fillRect(0, 0, 16 * box, 16 * box)
}
//Second function created
function createSnake() {
    //For will cover the entire array and make iteration. It will paiting the snake body green and set its size alright.
    for (i = 0; i < snake.length; i++) {
        //Here the context is linked to the snake, so no need to set its name again. Jus set a color.
        context.fillStyle = 'green'
            //Here we set the size of the snake.
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function drawFood() {
    context.fillStyle = 'red'
    context.fillRect(food.x, food.y, box /*width */ , box /*height */ )
}
//Now we need to detect the key pressed on the keyboard so we can take it as a controller to the snake. To detect that we create a document.addEvenListener.
//This doc will "hear" the click on the keydown button and it will call the function 'upadte' created bellow.
document.addEventListener('keydown', update)

//Each number correspondes to a key on the keyboard. 37 to the right, 38 down, 39 to the left and 40 up.
//The addEventListener will call the function and brings as argument the 'event'
//Fourth function created
function update(event) {
    //The direction can not be opposite to the direction we are clicking, this is so because our snake will not own "two heads" so it would just go to the opposite side normally. So after clicking right you can't just click left, for example.
    if (event.keyCode == 37 && direction != 'right') direction = 'left'
    if (event.keyCode == 38 && direction != 'down') direction = 'up'
    if (event.keyCode == 39 && direction != 'left') direction = 'right'
    if (event.keyCode == 40 && direction != 'up') direction = 'down'
}

//Third function created
function iniciateGame() {
    //The logic bellow comes from the cartesian plane and it says: We have a 0 point of X and Y, the snake will go untill the poit 16 of each side. If she surpass these points, one side will grow (17,18,19...) and the other will decrease (-1, -2, -3...) If the "head"of the snake in the x position if higher than 15 versus the size of the box which the canvas size (16), if she is going right, for example, and she exceed the border she will receive the valeu 0 and so she will appear on the "0 side" which would be the left side to the right side.
    if (snake[0].x > 15 * box && direction == 'right') snake[0].x = 0
    if (snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box
    if (snake[0].y > 15 * box && direction == 'down') snake[0].y = 0
    if (snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box
    createBG()
    createSnake()
    drawFood()
        //Setting the x and y position so the snake will have a starting point
        //Var snake x and y receving the positions
    let snakeX = snake[0].x
    let snakeY = snake[0].y
        //Creating the coordenates to the snake to follow
    if (direction == 'right') snakeX += box
        //Here as the snake should be going left, we use the decrement because of the cartesian plane in which to the right increases and to the left decreases. So it will give an ilusion that the snake is going left.
    if (direction == 'left') snakeX -= box
    if (direction == 'up') snakeY -= box
    if (direction == 'down') snakeY += box
        //To make the sie of the snake increase we need to check the coordenates and make it increase and not decrease.
        //So the condition is: if snakeX position is different of food.x and snakeY posotion is different of food.y it will remove the last element of the snake. If not, we will use Math.floor/Math.random again so when the snake "eat" the food another food will appear somewhere else automatically.
        //The snake.pop() is brought inside of this.
    if (snakeX != food.x || snakeY != food.y) {
        snake.pop()
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box
        food.y = Math.floor(Math.random() * 15 + 1) * box
    }
    //pop function will remove the last array element
    //After all of this we make the snake moves but......
    //snake.pop() went up inside the condition.
    //...it's need to create a "new head" using the unsihift method which adds one element in the beginning
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead)
}

//This var passes to the function and interval of 100ms, giving the game a non stop reload of 100ms
let game = setInterval(iniciateGame, 100)

//Calling the function here so it's possible to see it being rederized in the htlm. But first we need to use "defer" in hte head of html