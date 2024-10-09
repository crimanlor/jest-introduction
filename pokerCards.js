function shuffleDeck(deck) {
    return deck.sort(() => Math.random() - 0.5); // Función para mezclar el array
    // El método .sort() normalmente organiza los elementos de un array en base a una comparación.
    // Aquí, usamos una función de comparación que devuelve un valor aleatorio entre -0.5 y 0.5 (Math.random() genera un número entre 0 y 1, y restar 0.5 lo transforma en un valor entre -0.5 y 0.5).
    // Como el método .sort() organiza los elementos en base a si la función de comparación devuelve un valor positivo o negativo, esta operación aleatoria desordena la baraja.
}

function selectCard(deck, card) {
    // Busca el índice de la carta card dentro de la baraja deck.
    // Si la carta está en la baraja, cardIndex será un número mayor o igual a 0; si no está, será -1.
    const cardIndex = deck.indexOf(card);
    // Si cardIndex es mayor que -1, significa que la carta fue encontrada en la baraja.
    if (cardIndex > -1) {
        const removedCard = deck.splice(cardIndex, 1)[0]; // Elimina la carta
        shuffleDeck(deck); // Mezcla la baraja después de eliminar la carta
        return removedCard; // Devuelve la carta eliminada
    }
    return undefined; // La carta no estaba en la baraja
}

module.exports = { selectCard };
