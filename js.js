td = document.getElementsByClassName('t')
ta = document.getElementById('mapa')
resultado = document.getElementById('resultado')

let isO = true

let repe = []
let round = 0
let cont = 10
let son = true



// function vencedor(y,lista){
//     let total = 0
//     for (let i = 0; i< lista.llength; i++){
//         if i == String(x)
//     }
//     }

// }
function c(x){
    if(x.textContent == "."){
        cont = cont + 1
        return(cont)
        
    }else{
        return(x.textContent)
    }
    

}
function empate(){
    resultado.innerText = "Empatou"
}
function voltar(){
    for(let i = 1; i < 10; i++){
        td[i-1].innerText = "."
        td[i-1].style.color = "";
        td[i-1].style.textShadow = "";
        round = 0;
        isO = true;
        repe = [];
        round = 0;
        cont = 10;
        son = true;
        resultado.innerText = ""
    }
    if(isO == true){
        isO = false;
    }else{
        isO = false;
    }
}
function analise(tipo){
    if(c(td[0]) == c(td[1]) && c(td[2]) == c(td[1]) || c(td[3]) == c(td[4]) && c(td[4]) == c(td[5]) ||  c(td[6]) == c(td[7]) && c(td[7]) == c(td[8]) ) {
        resultado.innerText = tipo + " " + "Ganhou";
        son = false;
        round = 0
    }else if ( c(td[0]) == c(td[3]) && c(td[0]) == c(td[6]) || c(td[1]) == c(td[4]) && c(td[1]) == c(td[7]) ||  c(td[2]) == c(td[5]) && c(td[2]) == c(td[8]) ) {
        resultado.innerText = tipo + " " + "Ganhou";
        son = false;
        round = 0
    }else if ( c(td[0]) == c(td[4]) && c(td[4]) == c(td[8]) || c(td[6]) == c(td[4]) && c(td[4]) == c(td[2])){
        resultado.innerText = tipo + " " + "Ganhou";
        son = false;
        round = 0
    }
}
function inse(x){
    let y = "o"
    if(son==true){
        if(repe.indexOf(x) != -1){
            alert('Não pode repetir.')
        }else{
            if(isO == true){
                td[x-1].innerText = "o";
                td[x-1].style.color = "blue";
                td[x-1].style.textShadow = "0px 0px 35px rgba(30, 0, 255, 0.448)"
                isO = false;
                y = "o"
            }else{
                td[x-1].innerText = "x";
                td[x-1].style.color = "red"
                td[x-1].style.textShadow = "0px 0px 35px rgba(255, 0, 0, 0.448)"
                isO = true;
                y = "x"
            }
            repe.push(x)
            round = round + 1
          }
        analise(y);
        if(round > 8){
            empate()
        }else{
            y = y
        }
    }else{
        alert('Clique em reniciar')
    }
}