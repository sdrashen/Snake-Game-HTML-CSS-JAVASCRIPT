let canvas = document.getElementById('snake')
    // Context renders the design that will appear inside canvas. The 2d says that it will be handled as a 2d plane
let context = canvas.getContext('2d')
let box = 32
    // This function designs and defines
function criarBG() {
    // Here the context variable is receiving a color. fillStyle handles the style of the canvas/context
    context.fillStyle = 'lightgreen'
        //fillRect designs the rectangle where the game happens. It handles 4 parameters: x and y position, height and width. The game will be displayed in little squares so 32px for each little square is ok. So canvas has the width and height of 16 little squares as the size of the box variable.
    context.fillRect(0, 0, 16 * box, 16 * box)
}

//Calling the function here so it's possible to see it being rederized in the htlm. But first we need to use "defer" in hte head of html
criarBG()