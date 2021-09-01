"use strict"

let idAmarelo
let idVermelho
let idVerde
let idAutomatico

const semaforoVermelho = () => {
    semaforo.src = "img/vermelho.png"     
}

const semaforoAmarelo = () => {
    semaforo.src = "img/amarelo.png"     
}

const semaforoVerde = () => {
    semaforo.src = "img/verde.png"     
}

const trocarCor = () => {
    if(semaforoVermelho()){
        semaforoAmarelo()
    }else if(semaforoAmarelo()){
        semaforoVerde()
    }else{
        semaforoVermelho()
    }
}

const semaforoAutomatico = () => {
    const botaoAutomatico = document.getElementById('automatico')
    if (botaoAutomatico.textContent == 'Automático'){
        idAutomatico = setInterval(trocarCor, 1000)
        botaoAutomatico.textContent = 'Manual'
    }else{
        botaoAutomatico.textContent == 'Automático'
    }
}

document.getElementById('vermelho').addEventListener("click", semaforoVermelho)
document.getElementById('amarelo').addEventListener("click", semaforoAmarelo)
document.getElementById('verde').addEventListener("click", semaforoVerde)
document.getElementById('automatico').addEventListener("click", semaforoAutomatico)