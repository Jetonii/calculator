const result = document.getElementById('result')
const clear = document.getElementById('clear')
const negate = document.getElementById('negate')
const percent = document.getElementById('percent')
const divide = document.getElementById('divide')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const times = document.getElementById('times')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const minus = document.getElementById('minus')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const plus = document.getElementById('plus')
const zero = document.getElementById('zero')
const point = document.getElementById('point')
const equal = document.getElementById('equal')

// Add numbers and operators to an array, then when equal is clicked perform the operations between numbers
let array = []

clear.addEventListener('click', ()=>{
    result.innerText='0'
    array = [];
})

point.addEventListener('click', ()=>{
    if (result.innerText[result.innerText.length-1]!='.'){
        result.innerText += '.'
    }
})
zero.addEventListener('click', ()=> {
    if (parseFloat(result.innerText)===0){
        result.innerText = 0;
    }else {
        result.innerText += '0'
    }
})

one.addEventListener('click', ()=> {
    if (result.innerText === '0'){
        result.innerText = '1' 
    }else {
        result.innerText += '1' 
    }
})
two.addEventListener('click', ()=>{
    if (result.innerText === '0'){
        result.innerText = '2' 
    }else {
        result.innerText += '2' 
    }
})
three.addEventListener('click', ()=>{
    if (result.innerText === '0'){
        result.innerText = '3' 
    }else {
        result.innerText += '3' 
    }
})

four.addEventListener('click', ()=>{
    if (result.innerText === '0'){
        result.innerText = '4' 
    }else {
        result.innerText += '4' 
    }
})

five.addEventListener('click', ()=>{
    if (result.innerText === '0'){
        result.innerText = '5' 
    }else {
        result.innerText += '5' 
    }
})
six.addEventListener('click', ()=>{
    if (result.innerText === '0'){
        result.innerText = '6' 
    }else {
        result.innerText += '6' 
    }
})
seven.addEventListener('click', ()=>{
    if (result.innerText === '0'){
        result.innerText = '7' 
    }else {
        result.innerText += '7' 
    }
})
eight.addEventListener('click', ()=>{
    if (result.innerText === '0'){
        result.innerText = '8' 
    }else {
        result.innerText += '8' 
    }
})
nine.addEventListener('click', ()=>{
    if (result.innerText === '0'){
        result.innerText = '9' 
    }else {
        result.innerText += '9' 
    }
})

plus.addEventListener('click', ()=>{
    array.push(result.innerText)
    array.push('plus')  
    result.innerText = '0'
    console.log(array)
})

times.addEventListener('click', ()=>{
    array.push(result.innerText)
    array.push('times')  
    result.innerText = '0'
    console.log(array)
})

divide.addEventListener('click', ()=>{
    array.push(result.innerText)
    array.push('divide')  
    result.innerText = '0'
    console.log(array)
})
minus.addEventListener('click', ()=>{
    array.push(result.innerText)
    array.push('minus')  
    result.innerText = '0'
    console.log(array)
})
percent.addEventListener('click', ()=>{
    array.push(result.innerText)
    array.push('percent')  
    result.innerText = '0'
    console.log(array)
})
negate.addEventListener('click', ()=>{
    array.push(result.innerText)
    array.push('negate')  
    result.innerText = '0'
    console.log(array)
})
equal.addEventListener('click', ()=>{
    array.push(result.innerText);
    console.log(array)
    if (array.length===0){
        result.innerText = 0;
    }else if (array.length === 2){
        alert("Can't calculate! Type a second number")
    }else {}
    let res = false
    for (let i = 1; i < array.length; i+=2){
        if (!res){
            switch(array[i]){
                case 'plus':
                    res = parseFloat(array[i-1]) + parseFloat(array[i+1])
                    break;
                case 'minus':
                    res = parseFloat(array[i-1]) - parseFloat(array[i+1])
                    break;
                case 'times':
                    res = parseFloat(array[i-1]) * parseFloat(array[i+1])
                    break;
                case 'divide':
                    res = parseFloat(array[i-1]) / parseFloat(array[i+1])
                    break;
                case 'percent':
                    res = parseFloat(array[i-1])/100
                    break;
                case 'negate':
                    res -= parseFloat(array[i-1])
                    break;
                default: 
                    console.log('works')
            }
        }else {
            switch(array[i]){
                case 'plus':
                    res += parseFloat(array[i+1])
                    break;
                case 'minus':
                    res -= parseFloat(array[i+1])
                    break;
                case 'times':
                    res *= parseFloat(array[i+1])
                    break;
                case 'divide':
                    res /= parseFloat(array[i+1])
                    break;
                case 'percent':
                    res = parseFloat(array[i-1])/100
                    break;
                case 'negate':
                    res -= parseFloat(array[i+1])
                    break;
                default: 
                    console.log('works')
            }
        }
    }
    array = []
    console.log(array)
    result.innerText = res.toString();
    res = false;
});