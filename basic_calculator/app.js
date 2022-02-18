const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const validarNumero = (numero) => {
    const resultado = Number.parseFloat(numero);
    if(!resultado){
        console.log('numero nao e valido');
    } return resultado;
}

const validarOperador = (operador) => {
    switch(operador){
        case '+':
        case '-':
        case '*':
        case '/':
        case '%': 
        return operador;
        default: 
        console.log('operador invalido');
         } return null;  
}



readline.question('informe o primeior numero : ', (numero1) => {
    const validarNumero1 = validarNumero(numero1)
    
    if(validarNumero1){
        readline.question('informe o segundo numero :', (numero2)=>{
            const validarNumero2 = validarNumero(numero2);

            if( validarNumero2){
                readline.question('informar operador :', (operador) => {
                    const operadorValido = validarOperador(operador);

                    switch(operadorValido){
                        case '+': console.log(`${validarNumero1} + ${validarNumero2} = ${validarNumero1 + validarNumero2}`);
                        break
                        case '-': console.log(`${validarNumero1} + ${validarNumero2} = ${validarNumero1 - validarNumero2}`);
                        break
                        case '*': console.log(`${validarNumero1} + ${validarNumero2} = ${validarNumero1 * validarNumero2}`);
                        break
                        case '/': console.log(`${validarNumero1} + ${validarNumero2} = ${validarNumero1 / validarNumero2}`);
                        break
                        case '%': console.log(`${validarNumero1} + ${validarNumero2} = ${validarNumero1 % validarNumero2}`);
                        break
                        default : break;

                    }
                });
            }

        
            

        });

    }
});
    