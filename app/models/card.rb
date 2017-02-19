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
#

class Card < ActiveRecord::Base
  belongs_to :deck
  belongs_to :item,
    polymorphic: true

  def to_json
    if self.item_type == "Hiragana" || self.item_type == "Katakana"
      {
        id: self.id,
        item: self.item.kana,
        answer: self.item.syllable
      }
    end
  end
end
