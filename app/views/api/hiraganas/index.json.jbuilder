json.none @hiraganas.where(group: 1).each do |kana|
  json.partial! "api/hiraganas/hiragana", hiragana: kana
end

json.k @hiraganas.where(group: 2).limit(5).each do |kana|
  json.partial! "api/hiraganas/hiragana", hiragana: kana
end

json.s @hiraganas.where(group: 3).limit(5).each do |kana|
  json.partial! "api/hiraganas/hiragana", hiragana: kana
end

json.t @hiraganas.where(group: 4).limit(5).each do |kana|
  json.partial! "api/hiraganas/hiragana", hiragana: kana
end

json.y @hiraganas.where(group: 5).each do |kana|
  json.partial! "api/hiraganas/hiragana", hiragana: kana
end

json.n @hiraganas.where(group: 6).each do |kana|
  json.partial! "api/hiraganas/hiragana", hiragana: kana
end

json.h @hiraganas.where(group: 7).limit(5).each do |kana|
  json.partial! "api/hiraganas/hiragana", hiragana: kana
end

json.m @hiraganas.where(group: 8).each do |kana|
  json.partial! "api/hiraganas/hiragana", hiragana: kana
end

json.r @hiraganas.where(group: 9).each do |kana|
  json.partial! "api/hiraganas/hiragana", hiragana: kana
end

json.w @hiraganas.where(group: 10).each do |kana|
  json.partial! "api/hiraganas/hiragana", hiragana: kana
end
