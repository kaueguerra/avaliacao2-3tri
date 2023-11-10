function tocasom(idElemenoAudio) {
    document.querySelector(idElemenoAudio).play();
}
const ListaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
while(contador < ListaDeTeclas.length) {
    const efeito = ListaDeTeclas[contador].classList[1];
    const idAudio = "#som_"+efeito;
    ListaDeTeclas[contador].onclick = function(){
        tocasom(idAudio)
    }
    contador = contador +1;
    console.log(contador);
}