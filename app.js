const cena = document.getElementById("cena")

function obliczanie(dane) {
    let cena_koncowa;
    if ( dane.ilosc){
        cena_koncowa=parseFloat(dane.ilosc.value*3);
    }
    if( dane.rozek[0].checked){
        cena_koncowa+=parseFloat(dane.rozek[0].value)
    }
    if( dane.rozek[1].checked){
        cena_koncowa+=parseFloat(dane.rozek[1].value)
    }
    if( dane.rozek[2].checked){
        cena_koncowa+=parseFloat(dane.rozek[2].value)
    }
    if( dane.add[0].checked){
        cena_koncowa+=parseFloat(dane.add[0].value)
    }
    if( dane.add[1].checked){
        cena_koncowa+=parseFloat(dane.add[1].value)
    }
    if( dane.add[2].checked){
        cena_koncowa+=parseFloat(dane.add[2].value)
    }
    
    if( dane.dis[0].checked){
        cena_koncowa=cena_koncowa;
    }
    if( dane.dis[1].checked){
        cena_koncowa*=parseFloat(dane.dis[1].value)
    }
    if( dane.dis[2].checked){
        cena_koncowa*=parseFloat(dane.dis[2].value)
    }


    
    cena.innerHTML = "Do zapłaty " +cena_koncowa.toFixed(2) + " pln";
    
}
  

/*
    if( dane.rozek[0].checked){
        cena_koncowa+=parseFloat(dane.rozek[0].value)
    }
    if( dane.rozek[1].checked){
        cena_koncowa+=parseFloat(dane.rozek[1].value)
    }
    if( dane.rozek[2].checked){
        cena_koncowa+=parseFloat(dane.rozek[2].value)
    }
    if( dane.add[0].checked){
        cena_koncowa+=parseFloat(dane.add[0].value)
    }
    if( dane.add[1].checked){
        cena_koncowa+=parseFloat(dane.add[1].value)
    }
    if( dane.add[2].checked){
        cena_koncowa+=parseFloat(dane.add[2].value)
    }
    
    if( dane.dis[0].checked){
        cena_koncowa=cena_koncowa;
    }
    if( dane.dis[1].checked){
        cena_koncowa*=parseFloat(dane.dis[1].value)
    }
    if( dane.dis[2].checked){
        cena_koncowa*=parseFloat(dane.dis[2].value)
    }
*/
