json.array! @query_results.map do |query|
  json.extract! query, :id, :item_id, :item_type, :translation, :transliteration
end
