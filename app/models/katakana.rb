# == Schema Information
#
# Table name: katakanas
#
#  id         :integer          not null, primary key
#  kana       :string
#  syllable   :string
#  group      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Katakana < ActiveRecord::Base
  validates :group, presence: true

  has_many :cards, as: :item

  has_one :searchable, as: :item

  def to_card
    {
      item: self.kana,
      answer: self.syllable
    }
  end
end
