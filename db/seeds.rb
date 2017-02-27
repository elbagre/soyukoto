User.destroy_all

guest = User.create(email: "guest@guest.com", username: "guest", password: "guests")
el_bagre = User.create(email: "peter.michael.mckinley@gmail.com", username: "elbagre", password: "password")

Hiragana.destroy_all

a = Hiragana.create(kana: "あ", syllable: "a", group: 1)
i = Hiragana.create(kana: "い", syllable: "i", group: 1)
u = Hiragana.create(kana: "う", syllable: "u", group: 1)
e = Hiragana.create(kana: "え", syllable: "e", group: 1)
o = Hiragana.create(kana: "お", syllable: "o", group: 1)

ka = Hiragana.create(kana: "か", syllable: "ka", group: 2)
ki = Hiragana.create(kana: "き", syllable: "ki", group: 2)
ku = Hiragana.create(kana: "く", syllable: "ku", group: 2)
ke = Hiragana.create(kana: "け", syllable: "ke", group: 2)
ko = Hiragana.create(kana: "こ", syllable: "ko", group: 2)

ga = Hiragana.create(kana: "が", syllable: "ga", group: 21)
gi = Hiragana.create(kana: "ぎ", syllable: "gi", group: 21)
gu = Hiragana.create(kana: "ぐ", syllable: "gu", group: 21)
ge = Hiragana.create(kana: "げ", syllable: "ge", group: 21)
go = Hiragana.create(kana: "ご", syllable: "go", group: 21)

sa = Hiragana.create(kana: "さ", syllable: "sa", group: 3)
shi = Hiragana.create(kana: "し", syllable: "shi", group: 3)
su = Hiragana.create(kana: "す", syllable: "su", group: 3)
se = Hiragana.create(kana: "せ", syllable: "se", group: 3)
so = Hiragana.create(kana: "そ", syllable: "so", group: 3)

za = Hiragana.create(kana: "ざ", syllable: "za", group: 31)
ji = Hiragana.create(kana: "じ", syllable: "ji", group: 31)
zu = Hiragana.create(kana: "ず", syllable: "zu", group: 31)
ze = Hiragana.create(kana: "ぜ", syllable: "ze", group: 31)
zo = Hiragana.create(kana: "ぞ", syllable: "zo", group: 31)

ta = Hiragana.create(kana: "た", syllable: "ta", group: 4)
chi = Hiragana.create(kana: "ち", syllable: "chi", group: 4)
tsu = Hiragana.create(kana: "つ", syllable: "tsu", group: 4)
te = Hiragana.create(kana: "て", syllable: "te", group: 4)
to = Hiragana.create(kana: "と", syllable: "to", group: 4)

da = Hiragana.create(kana: "だ", syllable: "da", group: 41)
dzi = Hiragana.create(kana: "ぢ", syllable: "zi", group: 41)
dzu = Hiragana.create(kana: "づ", syllable: "dzu", group: 41)
de = Hiragana.create(kana: "で", syllable: "de", group: 41)
doe = Hiragana.create(kana: "ど", syllable: "do", group: 41)

ya = Hiragana.create(kana: "や", syllable: "ya", group: 5)
Hiragana.create(kana: " ", syllable: " ", group: 5)
yu = Hiragana.create(kana: "ゆ", syllable: "yu", group: 5)
Hiragana.create(kana: " ", syllable: " ", group: 5)
yo = Hiragana.create(kana: "よ", syllable: "yo", group: 5)

na = Hiragana.create(kana: "な", syllable: "na", group: 6)
ni = Hiragana.create(kana: "に", syllable: "ni", group: 6)
nu = Hiragana.create(kana: "ぬ", syllable: "nu", group: 6)
ne = Hiragana.create(kana: "ね", syllable: "ne", group: 6)
no = Hiragana.create(kana: "の", syllable: "no", group: 6)

ha = Hiragana.create(kana: "は", syllable: "ha", group: 7)
hi = Hiragana.create(kana: "ひ", syllable: "hi", group: 7)
hu = Hiragana.create(kana: "ふ", syllable: "hu", group: 7)
he = Hiragana.create(kana: "へ", syllable: "he", group: 7)
ho = Hiragana.create(kana: "ほ", syllable: "ho", group: 7)

ba = Hiragana.create(kana: "ば", syllable: "ba", group: 71)
bi = Hiragana.create(kana: "び", syllable: "bi", group: 71)
bu = Hiragana.create(kana: "ぶ", syllable: "bu", group: 71)
be = Hiragana.create(kana: "べ", syllable: "be", group: 71)
bo = Hiragana.create(kana: "ぼ", syllable: "bo", group: 71)

pa = Hiragana.create(kana: "ぱ", syllable: "pa", group: 72)
pi = Hiragana.create(kana: "ぴ", syllable: "pi", group: 72)
pu = Hiragana.create(kana: "ぷ", syllable: "pu", group: 72)
pe = Hiragana.create(kana: "ぺ", syllable: "pe", group: 72)
po = Hiragana.create(kana: "ぽ", syllable: "po", group: 72)

ma = Hiragana.create(kana: "ま", syllable: "ma", group: 8)
mi = Hiragana.create(kana: "み", syllable: "mi", group: 8)
mu = Hiragana.create(kana: "む", syllable: "mu", group: 8)
me = Hiragana.create(kana: "め", syllable: "me", group: 8)
mo = Hiragana.create(kana: "も", syllable: "mo", group: 8)

ra = Hiragana.create(kana: "ら", syllable: "ra", group: 9)
ri = Hiragana.create(kana: "り", syllable: "ri", group: 9)
ru = Hiragana.create(kana: "る", syllable: "ru", group: 9)
re = Hiragana.create(kana: "れ", syllable: "re", group: 9)
ro = Hiragana.create(kana: "ろ", syllable: "ro", group: 9)

wa = Hiragana.create(kana: "わ", syllable: "wa", group: 10)
Hiragana.create(kana: " ", syllable: " ", group: 10)
wo = Hiragana.create(kana: "を", syllable: "wo", group: 10)
Hiragana.create(kana: " ", syllable: " ", group: 10)
n = Hiragana.create(kana: "ん", syllable: "n", group: 10)

Katakana.destroy_all

kata_a = Katakana.create(kana: "ア", syllable: "a", group: 1)
kata_i = Katakana.create(kana: "イ", syllable: "i", group: 1)
kata_u = Katakana.create(kana: "ウ", syllable: "u", group: 1)
kata_e = Katakana.create(kana: "エ", syllable: "e", group: 1)
kata_o = Katakana.create(kana: "オ", syllable: "o", group: 1)

kata_ka = Katakana.create(kana: "カ", syllable: "ka", group: 2)
kata_ki = Katakana.create(kana: "キ", syllable: "ki", group: 2)
kata_ku = Katakana.create(kana: "ク", syllable: "ku", group: 2)
kata_ke = Katakana.create(kana: "ケ", syllable: "ke", group: 2)
kata_ko = Katakana.create(kana: "コ", syllable: "ko", group: 2)

kata_ga = Katakana.create(kana: "ガ", syllable: "ga", group: 21)
kata_gi = Katakana.create(kana: "ギ", syllable: "gi", group: 21)
kata_gu = Katakana.create(kana: "グ", syllable: "gu", group: 21)
kata_ge = Katakana.create(kana: "ゲ", syllable: "ge", group: 21)
kata_go = Katakana.create(kana: "ゴ", syllable: "go", group: 21)

kata_sa = Katakana.create(kana: "サ", syllable: "sa", group: 3)
kata_shi = Katakana.create(kana: "シ", syllable: "shi", group: 3)
kata_su = Katakana.create(kana: "ス", syllable: "su", group: 3)
kata_se = Katakana.create(kana: "セ", syllable: "se", group: 3)
kata_so = Katakana.create(kana: "ソ", syllable: "so", group: 3)

kata_za = Katakana.create(kana: "ザ", syllable: "za", group: 31)
kata_ji = Katakana.create(kana: "ジ", syllable: "ji", group: 31)
kata_zu = Katakana.create(kana: "ズ", syllable: "zu", group: 31)
kata_ze = Katakana.create(kana: "ゼ", syllable: "ze", group: 31)
kata_zo = Katakana.create(kana: "ゾ", syllable: "zo", group: 31)

kata_ta = Katakana.create(kana: "タ", syllable: "ta", group: 4)
kata_chi = Katakana.create(kana: "チ", syllable: "chi", group: 4)
kata_tsu = Katakana.create(kana: "ツ", syllable: "tsu", group: 4)
kata_te = Katakana.create(kana: "テ", syllable: "te", group: 4)
kata_to = Katakana.create(kana: "ト", syllable: "to", group: 4)

kata_da = Katakana.create(kana: "ダ", syllable: "da", group: 41)
kata_dzi = Katakana.create(kana: "ヂ", syllable: "zi", group: 41)
kata_dzu = Katakana.create(kana: "ヅ", syllable: "dzu", group: 41)
kata_de = Katakana.create(kana: "デ", syllable: "de", group: 41)
kata_doe = Katakana.create(kana: "ド", syllable: "do", group: 41)

kata_ya = Katakana.create(kana: "ヤ", syllable: "ya", group: 5)
Katakana.create(kana: " ", syllable: " ", group: 5)
kata_yu = Katakana.create(kana: "ユ", syllable: "yu", group: 5)
Katakana.create(kana: " ", syllable: " ", group: 5)
kata_yo = Katakana.create(kana: "ヨ", syllable: "yo", group: 5)

kata_na = Katakana.create(kana: "ナ", syllable: "na", group: 6)
kata_ni = Katakana.create(kana: "ニ", syllable: "ni", group: 6)
kata_nu = Katakana.create(kana: "ヌ", syllable: "nu", group: 6)
kata_ne = Katakana.create(kana: "ネ", syllable: "ne", group: 6)
kata_no = Katakana.create(kana: "ノ", syllable: "no", group: 6)

kata_ha = Katakana.create(kana: "ハ", syllable: "ha", group: 7)
kata_hi = Katakana.create(kana: "ヒ", syllable: "hi", group: 7)
kata_hu = Katakana.create(kana: "フ", syllable: "hu", group: 7)
kata_he = Katakana.create(kana: "ヘ", syllable: "he", group: 7)
kata_ho = Katakana.create(kana: "ホ", syllable: "ho", group: 7)

kata_ba = Katakana.create(kana: "バ", syllable: "ba", group: 71)
kata_bi = Katakana.create(kana: "ビ", syllable: "bi", group: 71)
kata_bu = Katakana.create(kana: "ブ", syllable: "bu", group: 71)
kata_be = Katakana.create(kana: "ベ", syllable: "be", group: 71)
kata_bo = Katakana.create(kana: "ボ", syllable: "bo", group: 71)

kata_pa = Katakana.create(kana: "パ", syllable: "pa", group: 72)
kata_pi = Katakana.create(kana: "ピ", syllable: "pi", group: 72)
kata_pu = Katakana.create(kana: "プ", syllable: "pu", group: 72)
kata_pe = Katakana.create(kana: "ペ", syllable: "pe", group: 72)
kata_po = Katakana.create(kana: "ポ", syllable: "po", group: 72)

kata_ma = Katakana.create(kana: "マ", syllable: "ma", group: 8)
kata_mi = Katakana.create(kana: "ミ", syllable: "mi", group: 8)
kata_mu = Katakana.create(kana: "ム", syllable: "mu", group: 8)
kata_me = Katakana.create(kana: "メ", syllable: "me", group: 8)
kata_mo = Katakana.create(kana: "モ", syllable: "mo", group: 8)

kata_ra = Katakana.create(kana: "ラ", syllable: "ra", group: 9)
kata_ri = Katakana.create(kana: "リ", syllable: "ri", group: 9)
kata_ru = Katakana.create(kana: "ル", syllable: "ru", group: 9)
kata_re = Katakana.create(kana: "レ", syllable: "re", group: 9)
kata_ro = Katakana.create(kana: "ロ", syllable: "ro", group: 9)

kata_wa = Katakana.create(kana: "ワ", syllable: "wa", group: 10)
Katakana.create(kana: " ", syllable: " ", group: 10)
kata_wo = Katakana.create(kana: "ヲ", syllable: "wo", group: 10)
Katakana.create(kana: " ", syllable: " ", group: 10)
kata_n = Katakana.create(kana: "ン", syllable: "n", group: 10)

Searchable.destroy_all

Katakana.all.each do |kana|
  Searchable.create(transliteration: kana.syllable, translation: kana.kana, item_id: kana.id, item_type: "Katakana")
end

Hiragana.all.each do |kana|
  Searchable.create(transliteration: kana.syllable, translation: kana.kana, item_id: kana.id, item_type: "Hiragana")
end

Deck.destroy_all
Card.destroy_all

first_kana = Deck.create(name: "First Kana", description: "First grouping of hiragana", user_id: guest.id)
Card.create(deck_id: first_kana.id, item_id: a.id, item_type: "Hiragana")
Card.create(deck_id: first_kana.id, item_id: i.id, item_type: "Hiragana")
Card.create(deck_id: first_kana.id, item_id: u.id, item_type: "Hiragana")
Card.create(deck_id: first_kana.id, item_id: e.id, item_type: "Hiragana")
Card.create(deck_id: first_kana.id, item_id: o.id, item_type: "Hiragana")

sec_kana = Deck.create(name: "2nd Kana", description: "K group hiragana", user_id: guest.id)
Card.create(deck_id: sec_kana.id, item_id: ka.id, item_type: "Hiragana")
Card.create(deck_id: sec_kana.id, item_id: ki.id, item_type: "Hiragana")
Card.create(deck_id: sec_kana.id, item_id: ku.id, item_type: "Hiragana")
Card.create(deck_id: sec_kana.id, item_id: ke.id, item_type: "Hiragana")
Card.create(deck_id: sec_kana.id, item_id: ko.id, item_type: "Hiragana")

thr_kana = Deck.create(name: "3rd Kana", description: "S group hiragana", user_id: guest.id)
Card.create(deck_id: thr_kana.id, item_id: sa.id, item_type: "Hiragana")
Card.create(deck_id: thr_kana.id, item_id: shi.id, item_type: "Hiragana")
Card.create(deck_id: thr_kana.id, item_id: su.id, item_type: "Hiragana")
Card.create(deck_id: thr_kana.id, item_id: se.id, item_type: "Hiragana")
Card.create(deck_id: thr_kana.id, item_id: so.id, item_type: "Hiragana")

four_kana = Deck.create(name: "4th Kana", description: "T group Hiragana", user_id: guest.id)
Card.create(deck_id: four_kana.id, item_id: ta.id, item_type: "Hiragana")
Card.create(deck_id: four_kana.id, item_id: chi.id, item_type: "Hiragana")
Card.create(deck_id: four_kana.id, item_id: tsu.id, item_type: "Hiragana")
Card.create(deck_id: four_kana.id, item_id: te.id, item_type: "Hiragana")
Card.create(deck_id: four_kana.id, item_id: to.id, item_type: "Hiragana")

five = Deck.create(name: "5th Kana", description: "N group Hiragana", user_id: guest.id)
Card.create(deck_id: five.id, item_id: na.id, item_type: "Hiragana")
Card.create(deck_id: five.id, item_id: ni.id, item_type: "Hiragana")
Card.create(deck_id: five.id, item_id: nu.id, item_type: "Hiragana")
Card.create(deck_id: five.id, item_id: ne.id, item_type: "Hiragana")
Card.create(deck_id: five.id, item_id: no.id, item_type: "Hiragana")

six = Deck.create(name: "6th Kana", description: "H group Hiragana", user_id: guest.id)
Card.create(deck_id: six.id, item_id: ha.id, item_type: "Hiragana")
Card.create(deck_id: six.id, item_id: hi.id, item_type: "Hiragana")
Card.create(deck_id: six.id, item_id: hu.id, item_type: "Hiragana")
Card.create(deck_id: six.id, item_id: he.id, item_type: "Hiragana")
Card.create(deck_id: six.id, item_id: ho.id, item_type: "Hiragana")

seven = Deck.create(name: "7th Kana", description: "M group Hiragana", user_id: guest.id)
Card.create(deck_id: seven.id, item_id: ma.id, item_type: "Hiragana")
Card.create(deck_id: seven.id, item_id: mi.id, item_type: "Hiragana")
Card.create(deck_id: seven.id, item_id: mu.id, item_type: "Hiragana")
Card.create(deck_id: seven.id, item_id: me.id, item_type: "Hiragana")
Card.create(deck_id: seven.id, item_id: mo.id, item_type: "Hiragana")

eight = Deck.create(name: "8th Kana", description: "R group Hiragana", user_id: guest.id)
Card.create(deck_id: eight.id, item_id: ra.id, item_type: "Hiragana")
Card.create(deck_id: eight.id, item_id: ri.id, item_type: "Hiragana")
Card.create(deck_id: eight.id, item_id: ru.id, item_type: "Hiragana")
Card.create(deck_id: eight.id, item_id: re.id, item_type: "Hiragana")
Card.create(deck_id: eight.id, item_id: ro.id, item_type: "Hiragana")

PublicDeck.destroy_all
PublicCard.destroy_all

pb_one = PublicDeck.create(name: "Hiragana", description: "All regular Hiragana", user_id: el_bagre.id)
pb_two = PublicDeck.create(name: "All Hiragana", description: "All Hiragana", user_id: el_bagre.id)
pb_three = PublicDeck.create(name: "All Katakana", description: "All Katakana", user_id: el_bagre.id)
pb_four = PublicDeck.create(name: "Katakana", description: "All normal Katakana", user_id: el_bagre.id)
pb_five = PublicDeck.create(name: "Greetings pt. 1", description: "Common greetings", user_id: el_bagre.id)
pb_six = PublicDeck.create(name: "Greetings pt. 2", description: "Common greetings", user_id: el_bagre.id)
pb_seven = PublicDeck.create(name: "Numbers (0-10)", description: "Easy numbers", user_id: el_bagre.id)
pb_eight = PublicDeck.create(name: "Introduction", description: "Common phrases", user_id: el_bagre.id)
pb_nine = PublicDeck.create(name: "Days", description: "Days of the week", user_id: el_bagre.id)
pb_ten = PublicDeck.create(name: "Useful Phrases", description: "Useful phrases for the casual tourist", user_id: el_bagre.id)
