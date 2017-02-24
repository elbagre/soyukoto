export const createCard = (card) => {
  return $.ajax({
    method: 'POST',
    url: 'api/cards',
    data: { card }
  });
}

export const destroyCard = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/cards/${id}`
  });
}

export const updateCard = (card) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/cards/${card.id}`,
    data: { grade: card.grade }
  });
}
