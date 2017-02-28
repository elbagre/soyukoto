# == Schema Information
#
# Table name: searchables
#
#  id              :integer          not null, primary key
#  translation     :string           default("")
#  transliteration :string           not null
#  item_id         :integer          not null
#  item_type       :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Searchable < ActiveRecord::Base
  validates :translation, :transliteration, :item_id, :item_type, presence: true
  validates :item_id, uniqueness: { scope: :item_type }

  belongs_to :item,
    polymorphic: true

  def to_json
    if self.item_type == "Hiragana" || self.item_type == "Katakana"
      {
        id: self.id,
        item_id: self.item_id,
        item_type: self.item_type,
        item: self.transliteration,
        answer: self.translation
      }
    end
  end
end
