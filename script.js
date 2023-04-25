const draw = document.getElementById('draw')
const range = document.getElementById('range')
const clear = document.getElementById('clear')
const rainbow = document.getElementById('rainbow')
var rgbActive = false

// listen the rainbow button, if it is true change to false and vice-versa
rainbow.addEventListener('click', () => {
    rgbActive = !rgbActive
    if (rgbActive) {
        rainbow.style.backgroundColor = 'aquamarine'
    }
    else {
        rainbow.style.backgroundColor = 'white'
    }
    mapDivs()
})

// create the grid
range.addEventListener('change', () => { 

    // test if the input is bigger then 100
    if (range.value > 100) {
        alert(`range should not be greater than 100`)
        return
    }

    destroyGrid()
    for (let i = 0; i < range.value * range.value; i++) {
        let div = document.createElement('div')
        div.classList.add('drawing-divs')   

        draw.style.gridTemplateColumns = `repeat(${range.value}, 1fr)`
        draw.appendChild(div)
    }
    mapDivs()
})

// listen the clear button
clear.addEventListener('click', () => {
    clearBox()
})

// map all the pixels in the drawing box and turn them into black when mouse is over
function mapDivs() {
    let divs = getAllPixels()

    if (rgbActive === false) {
        divs.forEach(div => div.addEventListener('mouseover', function() {
            div.style.backgroundColor = 'black'
        }))
    }

    else { 
        divs.forEach(div => div.addEventListener('mouseover', function() {
            div.style.backgroundColor = createRandomColor()
        }))
    }    
}

// clean the drawing box
function clearBox() {
    let divs = getAllPixels()
    divs.forEach(div => div.style.backgroundColor = 'white')
}

// get all the pixels in the drawing box, called before the box is created
function getAllPixels() {
    return Array.from(document.querySelectorAll('.drawing-divs'));
}

// destroy the actual grid
function destroyGrid()  {
    draw.innerHTML = ''
}

function createRandomColor() {
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    return `rgb(${x}, ${y}, ${z})`
}

