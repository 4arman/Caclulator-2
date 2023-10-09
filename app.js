const display = document.querySelector('.input')
const plus = document.querySelector('.plus-btn')
const ev = document.querySelector('.eval-btn')
const acBtn = document.querySelector('.ac-btn')
const ceBtn = document.querySelector('.ce-btn')
const multiply = document.querySelector('.multiply-btn')
const division = document.querySelector('.division-btn')
const dote = document.querySelector('.dote-btn')
const minus = document.querySelector('.minus-btn')
const number1 = document.querySelector('.one-btn')
const number2 = document.querySelector('.two-btn')
const number3 = document.querySelector('.three-btn')
const number4 = document.querySelector('.fourth-btn')
const number5 = document.querySelector('.five-btn')
const number6 = document.querySelector('.six-btn')
const number7 = document.querySelector('.seven-btn')
const number8 = document.querySelector('.eight-btn')
const number9 = document.querySelector('.nine-btn')
const number0 = document.querySelector('.zero-btn')
const number00 = document.querySelector('.double-zero-btn')
const numSet = setNumber(display)

numSet(number1, 1)
numSet(number2, 2)
numSet(number3, 3)
numSet(number4, 4)
numSet(number5, 5)
numSet(number6, 6)
numSet(number7, 7)
numSet(number8, 8)
numSet(number9, 9)
numSet(number0, 0)
numSet(number00, '00')
numSet(plus, '+')
numSet(minus, '-')
numSet(multiply, '*')
numSet(division, '/')
numSet(dote, '.')

function setNumber(dis) {
    return function (btn, num) {
        btn.onclick = () => dis.value += num
    }
}

acBtn.onclick = () => display.value = ''
ev.onclick = () => {
    display.value = eval(display.value)
    if (display.value == 'undefined') {
        display.value = ''
    }
}
ceBtn.onclick = () => {
    display.value = display.value.toString().slice(0, -1)
}
