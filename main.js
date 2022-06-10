
const prompt = require('prompt-sync')()
const inputType = prompt("Please 'combine' or 'deconstruct': ")
const inputType = prompt("Please 'combine' or 'deconstruct': ")

if (inputType === "combine") {

    const color1 = prompt('Please enter your first color: ')
    const color2 = prompt('Please enter your second color: ')

    if (color1 === "red" && color2 === "blue") {
        output = 'purple'
    }
    else if (color1 === 'red' && color2 === 'yellow') {
        output = 'orange'
    }
    else if (color1 === 'blue' && color2 === 'yellow') {
        output = 'green'
    }
    else {
        output = 'error!'
    }

}

else if (inputType === 'deconstruct') {

    const color1 = prompt('Please enter a color: ')

    if (color1 === 'purple') {
        output = 'red + blue'
    }
    else if (color1 === 'orange') {
        output = 'red + yellow'
    }
    else if (color1 === 'green') {
        output = 'blue + yellow'
    }
    else {
        output = 'error!'
    }
}

console.log(output)
