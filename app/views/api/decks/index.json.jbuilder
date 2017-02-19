json.array! @decks.map do |deck|
  json.partial! 'api/decks/deck', deck: deck, cards: deck.cards
end
