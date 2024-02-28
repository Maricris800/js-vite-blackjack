
/**
 * esta funcion crea un nuevo deck
 * @param {Array<string>} deck 
 * @returns {String} retorna un nuevo deck
 */
export const pedirCarta = (deck) => {

  //if (!deck || deck.length === 0){
   // throw "No hay cartas en el deck";
  //}
      
  return deck.pop();        
}