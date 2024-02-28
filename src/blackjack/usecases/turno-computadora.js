import { pedirCarta, valorCarta, crearCartaHTML} from "./";
//import { crearCartaHTML } from "./crear-carta-html";

/**
 * 
 * @param {Number} puntosJugador puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora HTML para mostrar las cartas
 * @param {Array<String>} deck
 */

//turno de la computadora
export const turnoComputadora = (puntosJugador, puntosHTML, divCartasComputadora, deck=[]) =>{

  //if (!puntosJugador) throw new Error("Puntos minimos son necesarios");
  //if (!puntosHTML) throw new Error("Argumento puntosHTML es necesario");

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML[1].innerText = puntosComputadora;    

    //TO DO CREAR-CARTA
    const imgCarta = crearCartaHTML(carta);
    divCartasComputadora.append(imgCarta);    

    if (puntosJugador > 21) {
      break;
    } 
  } while ((puntosComputadora < puntosJugador) && (puntosJugador <= 21));
   
      
  determinarGanador(puntosJugador,puntosComputadora);
}

const determinarGanador = (puntosMinimos,puntosComputadora) => {

  //const [puntosMinimos,puntosComputadora] = puntosJugadores;

  setTimeout(()=> {
    if (puntosComputadora === puntosMinimos){
      alert("Nadie gana");
    } else if (puntosMinimos > 21){
      alert("Computadora gana");
    } else if (puntosComputadora > 21){
      alert("Jugador gana");        
    } else {
      alert("Computadora gana");
    }
  }, 1000); 
}