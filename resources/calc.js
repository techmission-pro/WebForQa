function calculate () {
const num1 = +document.querySelector ('[name="num1"]').value;
const num2 = +document.querySelector ('[name="num2"]').value;
const oper = document.querySelector ('[name="oper"]').value;

let result;

if (oper ==='plus') {
	result = num1 + num2;
} else if (oper === 'minus') {
	result = num1 - num2;
} else if (oper === 'multiple') {
	result = num1 * num2;
} else if (oper === 'divide') {
	result = num1 / num2;
} else {
	console.error('Wrong oper!');
	alert('Wrong operation is selected');
}

document.querySelector('.calc-result').value = result;
}
document.querySelector('.calc-calculate').addEventListener('click', function() {
    calculate();	
});
document.querySelector('[name="oper"]').addEventListener('change', function(){
	calculate();
});
document.querySelector('[name="num1"]').addEventListener('input', function(){
    calculate();
});
	
document.querySelector('[name="num2"]').addEventListener('input', function(){
    calculate();
});