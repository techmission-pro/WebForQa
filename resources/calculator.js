

function calculate(){
    const num1 = +document.querySelector('[name="num1"]').value;
    const num2 = +document.querySelector('[name="num2"]').value;
    const operation = document.querySelector('[name="oper"]').value;
    
    let result;
    if (operation==="Addition") {
        result = num1 + num2;
    } else if (operation==="Subtraction") {
        result = num1 - num2;
    } else if (operation==="Division") {
        result = num1 / num2;
    } else if (operation==="Multiplication") {
        result = num1 * num2;
    } else if (operation==="Modulo") {
        result = num1 % num2;
    } else if (operation==="Exponent") {
        result = num1 ** num2;
    } else {
        result = "";
    }
    document.querySelector('.result-value').value = result;
}

document.querySelector('.button-calculate').addEventListener('click',function(){
    calculate();
});

document.querySelector('[name="num1"]').addEventListener('input',function(){
    calculate();
});

document.querySelector('[name="num2"]').addEventListener('input',function(){
    calculate();
});
document.querySelector('[name="oper"]').addEventListener('change',function(){
    calculate();
});

