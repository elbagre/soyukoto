export const createPublicDeck = (public_deck) => {
  return $.ajax({
    method: 'POST',
    url: 'api/public_decks',
    data: { public_deck }
  });
}

export const destroyPublicDeck = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/public_decks/${id}`
  });
}

export const fetchPublicDecks = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/public_decks'
  });
}

export const fetchPublicDeck = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/public_decks/${id}`
  })
}
