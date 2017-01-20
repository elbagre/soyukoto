json.normalGroupings do
  json.∅ @katakanas.where(group: 1).each do |kana|
    json.partial! "api/katakanas/katakana", katakana: kana
  end

  json.k @katakanas.where(group: 2).limit(5).each do |kana|
    json.partial! "api/katakanas/katakana", katakana: kana
  end

  json.s @katakanas.where(group: 3).limit(5).each do |kana|
    json.partial! "api/katakanas/katakana", katakana: kana
  end

  json.t @katakanas.where(group: 4).limit(5).each do |kana|
    json.partial! "api/katakanas/katakana", katakana: kana
  end

  json.n @katakanas.where(group: 6).each do |kana|
    json.partial! "api/katakanas/katakana", katakana: kana
  end

  json.h @katakanas.where(group: 7).limit(5).each do |kana|
    json.partial! "api/katakanas/katakana", katakana: kana
  end

  json.m @katakanas.where(group: 8).each do |kana|
    json.partial! "api/katakanas/katakana", katakana: kana
  end

  json.r @katakanas.where(group: 9).each do |kana|
    json.partial! "api/katakanas/katakana", katakana: kana
  end

  json.y @katakanas.where(group: 5).each do |kana|
    json.partial! "api/katakanas/katakana", katakana: kana
  end

  json.w @katakanas.where(group: 10).each do |kana|
    json.partial! "api/katakanas/katakana", katakana: kana
  end
end

json.variantGroupings do
  json.k @katakanas.where(group: 2).each do |kana|
    json.partial! "api/katakanas/katakana", katakana: kana
  end

  json.g @katakanas.where(group: 21).each do |kana|
    json.partial! "api/katakanas/katakana", katakana: kana
  end

  json.s @katakanas.where(group: 3).each do |kana|
    json.partial! "api/katakanas/katakana", katakana: kana
  end

  json.z @katakanas.where(group: 31).each do |kana|
    json.partial! "api/katakanas/katakana", katakana: kana
  end

  json.t @katakanas.where(group: 4).each do |kana|
    json.partial! "api/katakanas/katakana", katakana: kana
  end

  json.d @katakanas.where(group: 41).each do |kana|
    json.partial! "api/katakanas/katakana", katakana: kana
  end

  json.h @katakanas.where(group: 7).each do |kana|
    json.partial! "api/katakanas/katakana", katakana: kana
  end

  json.b @katakanas.where(group: 71).each do |kana|
    json.partial! "api/katakanas/katakana", katakana: kana
  end

  json.p @katakanas.where(group: 72).each do |kana|
    json.partial! "api/katakanas/katakana", katakana: kana
  end
end

json.kana @katakanas.map { |kana| kana.kana }

json.answers @katakanas.map { |kana| kana.syllable }
