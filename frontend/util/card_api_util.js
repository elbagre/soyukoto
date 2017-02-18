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
