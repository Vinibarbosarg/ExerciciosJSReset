function calculaTabuada(){
    let numero = 9;
    let count = 1;
    while(count <= 10)
    {
        let resultado = count * numero;
        console.log(numero, "x", count, "=", resultado);
        count++;
    }
}

calculaTabuada()