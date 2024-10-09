/**
 * Estamos jugando a un juego parecido al Scrabble  
 * 
 * Nos han definido un sistema de puntuación en https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
 * 
 * El algoritmo debe devolver la palabra que más puntúa de todo el string .
 */

function high(x) {
    // PRIMERO: Darle un valor númerico a cada letra. 
    //Array con todas las letras donde su valor sea su posición en el index +1 (se lo daremos después con indexOf() +1 )

    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //SEGUNDO separar las palabras de una frase y volverlas elementos de un array
    let arrayPhrase = x.split(" ");

    //TERCERO Creo las varianbles necesarias 
    // Una para acumular los puntos de cada
    let maxPoint = 0;
    //Otra para poner cual es la palabra con más puntos
    let maxWord = "";

    // Recorrer cada palabra (array) para poder comparar cuál tiene más puntos
    for (let w of arrayPhrase) {
        // Si la palabra contiene todas las volales, se devuelve automáticamente sin contar los puntos
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        if (vowels.every(vowel => w.includes(vowel))) {
            return w;
        }

        //Contar los puntos de cada palabra iterando dentro sus letras (si no contiene todas las vocales)
        let pointstWord = 0;
        for (let i of w) {
            // Para cada letra i, se busca su índice en el array letters con letters.indexOf(i) y se le suma 1 (ya que el índice comienza en 0 pero queremos que el valor de 'a' sea 1).
            pointstWord += letters.indexOf(i) + 1;
        }
        // Después de contar los puntos de la palabra w, se compara con maxPoint. Si la palabra actual tiene más puntos que la palabra con más puntos hasta ese momento, se actualizan maxPoint y maxWord con los nuevos valores.
        if (maxPoint < pointstWord) {
            maxPoint = pointstWord;
            maxWord = w;
        }
    }

    return maxWord;
}

module.exports = {
    high
}