

function calculate(){
    const num1 = +document.querySelector('[name="num1"]').value;
    const num2 = +document.querySelector('[name="num2"]').value;
    const operation = document.querySelector('[name="oper"]').value;
    
    let result;
    if (operation==="plus") {
        result = num1 + num2;
    } else if (operation==="minus") {
        result = num1 - num2;
    } else if (operation==="divide") {
        result = num1 / num2;
    } else if (operation==="multiply") {
        result = num1 * num2;
    } else {
        result = Null
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

