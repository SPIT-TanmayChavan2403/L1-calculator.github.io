let number1 = document.getElementById('num1');
let number2 = document.getElementById('num2');
let plus = document.querySelector('#plus');
let modal =document.querySelector('#modal');
let n1 = document.querySelector('#n1');
let n2 = document.querySelector('#n2');

window.addEventListener('onkeypress', (e) => {
    console.log(e.keyCode)
})

function updateResultField(e){
    if (!isNaN(e.value)){
        if (e.value == ""){
            num1.innerHTML = "0";
        } else {
            num1.innerHTML = e.value
        }
    } else {
        console.log('Please enter proper number');
    }
}

function updateResultField2(e){
    if (!isNaN(e.value)){
        if (e.value == ""){
            plus.innerHTML = "";
            num2.innerHTML = "";
        } else{
            plus.innerHTML = "+"
            num2.innerHTML = e.value;
        }
    } else {
        console.log('Please enter proper number');
    }
}

function add(){

    let addition = parseInt(n1.value) + parseInt(n2.value);
    if (isNaN(addition)){
        modal.style.top = '3%';
        setTimeout(() => {
            modal.style.top = '-100%';
        }, 1000);
    } else {
        number1.innerHTML = addition;
        plus.innerHTML = "";
        number2.innerHTML = "";
    }
    
}


function reset(){
    n1.value = ""
    n2.value = ""
}