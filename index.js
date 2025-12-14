const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const color3 = document.getElementById('color3')
const color4 = document.getElementById('color4')
const color5 = document.getElementById('color5')
const btn = document.getElementById('submitBtn')
const colorSelection = document.getElementById('color')
const colorScheme = document.getElementById('color-scheme')

function changeColor(element, color){
    element.firstElementChild.innerHTML = `<p>${color}</p`
    element.style.backgroundColor = `${color}`
}


btn.addEventListener('click', () => {

fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelection.value.slice(1)}&mode=${colorScheme.value}&count=5`)
 .then(response => response.json())
 .then(data=> {
    console.log(data.colors)

    data.colors.forEach((element, index) => {
        const target = document.getElementById(`color${index+1}`)
        changeColor( target, element.hex.value)
    });
})
})