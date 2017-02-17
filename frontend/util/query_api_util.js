export const requestMatches = (query) => {
  return $.ajax({
    method: 'GET',
    url: 'api/searchables',
    data: { query }
  });
}
