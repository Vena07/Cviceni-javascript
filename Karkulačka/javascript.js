let vysledek = null;
let operace = '';
let priklad = null;


function appendNumber(cislo) {
    const displej = document.getElementById('display');
    
    if (priklad !== null){
        priklad += cislo;
        displej.innerHTML = priklad;
    } else {
        priklad = cislo;
        displej.innerHTML = priklad;
    }
    
}

function chooseOperation(ope){
    const displej = document.getElementById('display');
    if (priklad !== null ){
        operace = ope;
        displej.innerHTML = operace;
        if (vysledek !== null ) {   
            switch(operace){
                case '+':
                    vysledek = vysledek + Number(priklad);
                    break;
                case '-':
                    vysledek = vysledek - Number(priklad);
                    break;
                case '*':
                    vysledek = vysledek * Number(priklad);
                    break;
                case '/':
                    vysledek = vysledek / Number(priklad);
                    break;
            }
            priklad = null
            
    } else {
            if ( vysledek === null){
            vysledek = Number(priklad);
            priklad = null;
            }
        }
        
        
    }
}

function calculate(){
    const displej = document.getElementById('display');
    switch(operace){
        case '+':
            vysledek = vysledek + Number(priklad);
            break;
        case '-':
            vysledek = vysledek - Number(priklad);
            break;
        case '*':
            vysledek = vysledek * Number(priklad);
            break;
        case '/':
            vysledek = vysledek / Number(priklad);
            break;
    }
    displej.innerHTML = vysledek;
    priklad = null;
    vysledek = null;
    operace = '';
}

function clearDisplay(){
    const displej = document.getElementById('display');
    vysledek = null;
    operace = '';
    priklad = null;
    displej.innerHTML = vysledek;
}