# == Schema Information
#
# Table name: cards
#
#  id         :integer          not null, primary key
#  deck_id    :integer          not null
#  item_id    :integer          not null
#  item_type  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  grade      :float            default(0.0)
#

class Card < ActiveRecord::Base
  validates :item_id, :deck_id, :item_type, presence: true
  validates :item_id, uniqueness: { scope: [:deck_id, :item_type] }
  belongs_to :deck
  belongs_to :item,
    polymorphic: true

  def to_json
    if self.item_type == "Hiragana" || self.item_type == "Katakana"
      {
        id: self.id,
        grade: self.grade,
        item_id: self.item_id,
        item_type: self.item_type,
        item: self.item.kana,
        answer: self.item.syllable
      }
    end
  end
end
