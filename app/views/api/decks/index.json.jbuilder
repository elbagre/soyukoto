json.array! @decks.map do |deck|
  cards = deck.cards.map { |card| card.to_card }
  json.partial! 'api/decks/deck', deck: deck, cards: cards
end
