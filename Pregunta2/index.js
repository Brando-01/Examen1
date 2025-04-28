function operar(operacion) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    var resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = 'Error: ingresar números válidos';
    } else {
        switch (operacion) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    resultado = 'Error: división por cero';
                } else {
                    resultado = num1 / num2;
                }
                break;
            default:
                resultado = 'Operación no válida';
        }
    }

    document.getElementById('resultado').value = resultado;
}
