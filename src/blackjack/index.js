
import _ from "/node_modules/underscore";
import {crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML} from './usecases';

//import javascriptLogo from './javascript.svg';
//import viteLogo from '/vite.svg';
//import { setupCounter } from './counter.js';


let deck = [];

const tipos = ["C", "D", "H", "S"],
      especiales = ["A", "J", "Q", "K"];

  
let puntosJugador = 0;
let puntosComputadora = 0;
//let puntosJugadores = [];

//Referencia del HTML
const btnPedir = document.querySelector("#btnPedir"),
      btnDetener = document.querySelector("#btnDetener"),
      btnNuevo = document.querySelector("#btnNuevo");

//const divCartasJugadores = document.querySelectorAll(".divCartas");
const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");
const puntosHTML = document.querySelectorAll("small");

deck = crearDeck(tipos,especiales);

turnoComputadora(puntosJugador,puntosHTML,divCartasComputadora,deck);

//btnDetener
btnDetener.addEventListener("click", () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugador,puntosHTML,divCartasComputadora,deck);
  // mensGanador(puntosComp, puntosJug);
});

//Boton Pedir
btnPedir.addEventListener("click", () => {
  const carta = pedirCarta(deck);

  puntosJugador = puntosJugador + valorCarta(carta);
  puntosHTML[0].innerText = puntosJugador;

  const imgCarta = crearCartaHTML(carta);
  divCartasJugador.append(imgCarta);  

  if (puntosJugador > 21) {
    //alert("Haz Perdido");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador,puntosHTML,divCartasComputadora,deck);
    // mensGanador(puntosComp, puntosJug);
  } else if (puntosJugador === 21) {
    //alert("21 Haz ganado!.")
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador,puntosHTML,divCartasComputadora,deck);
    // mensGanador(puntosComp, puntosJug);
  }
});


//Boton Nuevo
btnNuevo.addEventListener("click", () => {
  console.clear();
  deck = [];

  deck = crearDeck(tipos,especiales);
  console.log(deck);

  btnPedir.disabled = false;
  btnDetener.disabled = false;

  puntosHTML[0].innerText = 0;
  puntosHTML[1].innerText = 0;

  puntosComputadora = 0;
  puntosJugador = 0;

  divCartasComputadora.innerHTML = "";
  divCartasJugador.innerHTML = "";
}); 
  

  
  

