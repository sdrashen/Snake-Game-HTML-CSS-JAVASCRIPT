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