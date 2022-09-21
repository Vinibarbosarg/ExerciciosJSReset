function calcularIMC(altura,peso){
    let imc = peso / (altura**2)
    
    if(imc >= 16 && imc <= 16.9){
        console.log("Muito abaixo do peso")
    }

    else if(imc >= 17 && imc <= 18.4){
        console.log("Abaixo do peso ")
    }

    else if(imc >= 18.5 && imc <= 24.9){
        console.log("Peso normal")
    }

    else if(imc >= 25 && imc <= 29.9){
        console.log("Acima do peso")
    }

    else if(imc >= 30 && imc <= 34.9){
        console.log("Obesidade grau 1")
    }

    else{
        console.log("Dado inválido")
    }
}
calcularIMC(1.55,70)