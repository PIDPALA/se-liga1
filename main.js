function tocasom (idElementoaudio) {
    document.querySelector(idElementoaudio).play();
}

const listadeteclas = document.querySelectorA11('.tecla');

//para
for(let contador = 0; contador < listadeteclas.lenght; contador++) {

    const tecla = listadeteclas[contador];
    const instrumento = tecla.classlist[1];
    const idAudio = '#som_${instrumento}' ; //template string
    
    tecla.onclick = function () {
        tocasom(idAudio);
    }

}