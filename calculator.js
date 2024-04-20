var op; 
function add() {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var result = num1 + num2;
    document.getElementById('result').textContent = "Результат: " + result;
}

function subtract() {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var result = num1 - num2;
    document.getElementById('result').textContent = "Результат: " + result;
}

function multiply() {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var result = num1 * num2;
    document.getElementById('result').textContent = "Результат: " + result;
}

function divide() {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    if (num2 !== 0) {
        var result = num1 / num2;
        document.getElementById('result').textContent = "Результат: " + result;
    } else {
        document.getElementById('result').textContent = "Ошибка: деление на ноль!";
    }
}