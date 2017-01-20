class Katakana < ActiveRecord::Base
  validates :group, presence: true

  has_many :cards, as: :item

  def to_card
    {
      item: self.kana,
      answer: self.syllable
    }
  end
end
