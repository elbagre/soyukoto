json.array! @public_decks.map do |deck|
  json.partial! 'api/public_decks/public_deck', public_deck: deck, cards: deck.cards
end
