/**
 * Permite tomar una carta del deck y retornarla para cada jugador
 * @param {Array<String>} deck Ejemplo ['9A', '7C', ...]
 * @returns {String} Retorna la ultima carta del deck. Ejemplo: 7C
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();

    return carta;
}
