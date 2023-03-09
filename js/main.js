/* declarando as constantes e já "puxando" os elementos lá do html */

const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

/* adicionando tempo na variaveis locais na função time */
const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if(hr <10) hr = "0" + hr; //Se a variavel estiver em decimal é concatenado um 0 na frente

    if(min <10) min = "0" + min;

    if(s <10) s = "0" + s;
    
    horas.textContent = hr; // as variaveis vão substituir o texto pela constantes do bloco acima da função tempo.
    minutos.textContent = min;
    segundos.textContent = s;
})