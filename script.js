const draw = document.getElementById('draw')
const range = document.getElementById('range')
const clear = document.getElementById('clear')


range.addEventListener('change', () => {
    for (let i = 0; i < range.value * range.value; i++) {
        let div = document.createElement('div')
        div.classList.add('drawing-divs')      
        draw.style.gridTemplateColumns = `repeat(${range.value}, 1fr)`

        draw.appendChild(div)
    }
    divs()
})

// map all the pixels in the drawing box, called before the box is created
function divs() {
    const divs = Array.from(document.querySelectorAll('.drawing-divs'));    
    divs.forEach(div => div.addEventListener('mouseover', function() {
        div.classList.add('black')
    }))
}

clear.addEventListener('click', () => {
    location.reload()
})

