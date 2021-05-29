// Variables

const countEl = document.querySelector('#count-el')
const message = document.querySelector('#message')
const minusBtn = document.querySelector('#minus-btn')
const plusBtn = document.querySelector('#plus-btn')
const resetBtn = document.querySelector('#reset-btn')

// App Starting State
let count = 0

// Event Listeners
plusBtn.addEventListener('click', increaseCount)
minusBtn.addEventListener('click', decreaseCount)
resetBtn.addEventListener('click', reset)

// Functions

function displayMsg() {
	if (count >= 20) {
		message.textContent = 'Stop We are at Capacity'
		plusBtn.disabled = true
	} else if (count < 1) {
		message.textContent = 'Nobody is Here'
		minusBtn.disabled = true
		plusBtn.disabled = false
	} else {
		message.textContent = 'Add More People'
		minusBtn.disabled = false
		plusBtn.disabled = false
	}
}

function increaseCount() {
	count += 1
	countEl.textContent = count
	displayMsg()
}

function decreaseCount() {
	count -= 1
	countEl.textContent = count
	displayMsg()
}

function reset() {
	count = 0
	countEl.textContent = count
	displayMsg()
	minusBtn.disabled = false
	plusBtn.disabled = false
}
