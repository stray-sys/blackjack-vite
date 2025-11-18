/**
 * Permite asignarle un valor a las cartas
 * @param {String} carta Ejemplo 4A
 * @returns {Number} Retorna el valor de las cartas especiales o el original: *1, 10 u 11
 */
export const valorCarta = ( carta ) => {
    if (!carta) throw new Error('El valor de la carta debe ser obligatorio');
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}