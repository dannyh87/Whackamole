'use strict'

const sizeOfGrid = 16

let score = 0

// returns a number between 1-a
const randomNumber = (a) =>{
    return Math.floor(Math.random() * a) + 1
}

// Update the score element eith the value in score varible.
const updateScore = () => {
    const element = document.getElementById('score')
    element.innerHTML = `Score: ${score}`
}

const clickSquare = (number) => {
    // console.log(`you clicked on box ${number}`)
    
    const element = document.getElementById(`${number}`)
    // console.log('element', element)

    if (element.classList.contains('mole')) {
        // Hitting a mole
        element.classList.remove('mole')

        score += 1
        updateScore()
        console.log('You gained a point ?!?!')
    }
}


const update = () => {
    console.log('update function')

    const number = randomNumber(sizeOfGrid)
    // console.log('number', number)

    const element = document.getElementById(`${number}`)

    // console.log('element', element)

    element.classList.add('mole')
}


const gameover = () => {
    console.log('gameover')
    clearInterval(updateTimer)
    alert(`Your score was: ${score}!!!`)
    // @TODO: reset game...
}

const gameTime = 10000
// const gameTime = 30000

let updateTimer // time for the update function

const start = () => {
    // console.log('start running')
    updateTimer = setInterval(update, 1000);
    console.log('updateTimer', updateTimer)

    setTimeout(gameover, gameTime)
    updateScore();
}





// const onclick 
// On Start -> select Random Number / div -> change div colour for 1 second -> if div is selected within 1 second then return 100 points which is accumulative
// -> for a max 30 seconds
// game ends - alert with total score