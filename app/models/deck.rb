# == Schema Information
#
# Table name: decks
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Deck < ActiveRecord::Base
  validates :name, presence: true, length: { minimum: 1, maximum: 15 }, uniqueness: true

  has_many :associated_cards,
    foreign_key: :deck_id,
    class_name: "Card"

  has_many :hiragana_cards,
    through: :associated_cards,
    source: :item,
    source_type: "Hiragana"

  has_many :katakana_cards,
    through: :associated_cards,
    source: :item,
    source_type: "Katakana"

  def cards
    self.hiragana_cards.to_a.concat(self.katakana_cards.to_a)
  end
end
