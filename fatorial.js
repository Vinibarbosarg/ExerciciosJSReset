function calculaFatorial(){
    let fat = 1;
    let num = 5;
    let c = num;
    while(c > 1){
        fat *= c;
        c --;
    }

    console.log("O fatorial de ", num, " é:", fat, "!")
}
calculaFatorial()