const { selectCard } = require("./pokerCards");

it('should select a card if it exists in deck and remove it', () => {
    const deck = ['A♠', '2♠', '3♠', '4♠', '5♠'];
    const selectedCard = selectCard(deck, '3♠');
    expect(selectedCard).toBe('3♠');
    expect(deck).not.toContain('3♠');
    expect(deck).toHaveLength(4);
});

it('should select the first card of deck and remove it', () => {
    const deck = ['A♥', 'K♦', '10♣', 'J♠'];
    const selectedCard = selectCard(deck, 'A♥');
    expect(selectedCard).toBe('A♥');
    expect(deck).not.toContain('A♥');
    expect(deck).toHaveLength(3);
})

it('should return "undefined" when the card is not in deck, and the deck length has to be the same', () => {
    const deck = ['7♠', '8♦', '9♣'];
    const selectedCard = selectCard(deck, '10♣');
    expect(selectedCard).toBe(undefined);
    expect(deck).toHaveLength(3);
});


// it('should select a card if it exists in deck and remove it', () => {
//     const deck = ['A♥', 'K♦', '10♣', 'J♠'];
//     const selectedCard = selectCard(deck, 'A♥');
//     expect(selectedCard).toBe('A♥')
// });