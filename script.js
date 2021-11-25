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
//Now we need to detect the key pressed on the keyboard so we can take it as a controller to the snake. To detect that we create a document.addEvenListener.
//This doc will "hear" the click on the keydown button and it will call the function 'upadte' created bellow.
document.addEventListener('keydown', update)

//Each number correspondes to a key on the keyboard. 37 to the right, 38 down, 39 to the left and 40 up.
//The addEventListener will call the function and brings as argument the 'event'
function update(event) {
    //The direction can not be opposite to the direction we are clicking, this is so because our snake will not own "two heads" so it would just go to the opposite side normally. So after clicking right you can't just click left, for example.
    if (event.keyCode == 37 && direction != 'right') direction = 'left'
    if (event.keyCode == 38 && direction != 'down') direction = 'up'
    if (event.keyCode == 39 && direction != 'left') direction = 'right'
    if (event.keyCode == 40 && direction != 'up') direction = 'down'
}

//Third function created
function iniciateGame() {
    createBG()
    createSnake()
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

    //pop function will remove the last array element
    //After all of this we make the snake moves but......
    snake.pop()
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