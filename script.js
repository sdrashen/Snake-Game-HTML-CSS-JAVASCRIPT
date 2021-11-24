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
    // This function designs and defines
function createBG() {
    // Here the context variable is receiving a color. fillStyle handles the style of the canvas/context
    context.fillStyle = 'lightgreen'
        //fillRect designs the rectangle where the game happens. It handles 4 parameters: x and y position, height and width. The game will be displayed in little squares so 32px for each little square is ok. So canvas has the width and height of 16 little squares as the size of the box variable.
    context.fillRect(0, 0, 16 * box, 16 * box)
}

function createSnake() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = 'green'
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

//Calling the function here so it's possible to see it being rederized in the htlm. But first we need to use "defer" in hte head of html
createBG()
createSnake()