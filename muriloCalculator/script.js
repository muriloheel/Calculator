//input and output boxes
const inputBox = document.querySelector('#input-box')
const outputBox = document.querySelector('#output-box')
//delete-submit buttons
const equalsBtn = document.querySelector('#equals')
const deleteAll = document.querySelector('#c')
//grabing groups of numbers and operators buttons
const allNumbersBtns = document.querySelectorAll('.numbers')
const allOperatorsBtns = document.querySelectorAll('.operators')
const backspace = document.querySelector('#backspace')

//numbers 1 and 2
let number1 = ''
let number2 = ''
let operator = ''
const sumBtn = document.getElementById('plus')
sumBtn.addEventListener('click', ()=>{
    number1 = parseFloat(outputBox.value)
})
const minusBtn = document.getElementById('minus')
minusBtn.addEventListener('click', ()=>{
    number1 = parseFloat(outputBox.value)
})
const timesBtn = document.getElementById('times')
timesBtn.addEventListener('click', ()=>{
    number1 = parseFloat(outputBox.value)
})
const divideBtn = document.getElementById('divided')
divideBtn.addEventListener('click', ()=>{
    number1 = parseFloat(outputBox.value)
})

allNumbersBtns.forEach(button=>{
    button.addEventListener('click', (e)=>{
        // console.log(outputBox.value[outputBox.value.length - 1])
        // console.log(e.target.innerText)
        if(outputBox.value[outputBox.value.length - 1] ==='.' && e.target.innerText === '.'){
            return
        }
        else{
            outputBox.value += e.target.innerText
        }
    })
})

allOperatorsBtns.forEach(button=>{
    button.addEventListener('click', (e)=>{
        if (outputBox.value != ""  && outputBox.value != null && outputBox.value != undefined){
            console.log(number1)
            if(inputBox.value === '' || inputBox.value === null || inputBox.value === undefined){
                operator = e.target.getAttribute('data-operator')
                inputBox.value += (number1 += e.target.innerText)
                outputBox.value = ''
            }
        }  
    })
})
backspace.addEventListener('click', ()=>{
    var newStr = outputBox.value.slice(0,-1)
    outputBox.value = newStr
})

deleteAll.addEventListener('click', ()=>{
    inputBox.value = ''
    outputBox.value= ''
})

equalsBtn.addEventListener('click', ()=>{
    //console.log(inputBox.value)

//  console.log(number1, number2)
//  console.log(operator)
    if(outputBox.value !== '.' && outputBox.value !== '' && inputBox !== ''){
        number1 = parseFloat(outputBox.value)
        number2 = parseFloat(inputBox.value)
        switch(operator) {
            case '+':
                outputBox.value = sum(number2,number1)
                inputBox.value = ''
                //console.log(number2, number1)
                break;
            case '-':
                outputBox.value = minus(number2,number1)
                inputBox.value = ''
                //console.log(number2, number1)
                break;
            case '*':
                outputBox.value = times(number2,number1)
                inputBox.value = ''
                //console.log(number2, number1)
                break;
            case '/':
                outputBox.value = divide(number2,number1)
                inputBox.value = ''
                //console.log(number2, number1)
                break;
        }
    }
    else{
        return
    }
})
function sum(num1, num2){
    return num1 + num2
}
function minus(num1, num2){
    return num1 - num2
}
function times(num1, num2){
    return num1 * num2
}
function divide(num1, num2){
    return (num1/num2)
}
