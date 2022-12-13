function factorial(num) {
    if (num<0){
        return "undefined";
    }
    var x = num;
    while (x > 1) {
      num *= x-1;
      x--;
    }
    return num;
  }

  function set_visibility(str_operation){
    document.querySelector('[name="num1"]').style.display = '';
    document.querySelector('[name="num2"]').style.display = '';
    document.getElementById("eval-str").style.display = 'none';
    if (str_operation==="Factorial") {
        document.querySelector('[name="num2"]').style.display = 'none';
    } else if (str_operation==="Evaluate") {
        document.querySelector('[name="num1"]').style.display = 'none';
        document.querySelector('[name="num2"]').style.display = 'none';
        document.getElementById("eval-str").style.display = '';
    } else {
    }
  }

function calculate(){
    const num1 = +document.querySelector('[name="num1"]').value;
    const num2 = +document.querySelector('[name="num2"]').value;
    const operation = document.querySelector('[name="oper"]').value;
    set_visibility(operation);
    var eval_string, result;
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
    } else if (operation==="Factorial") {
        result = factorial(num1);
    } else if (operation==="Evaluate") {
        try {
            result = eval(document.getElementById("eval-str").value);
          } catch (e) {
            result = "undefined";
          }
    } else {
        result = "undefined";
    }
    document.querySelector('.result-value').value = result;
}

document.querySelector('[name="oper"]').addEventListener('change',function(){
    const operation = document.querySelector('[name="oper"]').value;
    set_visibility(operation);
});

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

document.querySelector('[id="eval-str"]').addEventListener('input',function(){
    calculate();
});

calculate();
