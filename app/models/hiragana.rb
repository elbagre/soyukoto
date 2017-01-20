# == Schema Information
#
# Table name: hiraganas
#
#  id         :integer          not null, primary key
#  kana       :string
#  syllable   :string
#  group      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Hiragana < ActiveRecord::Base
  validates :group, presence: true

  has_many :cards, as: :item

  def to_card
    {
      item: self.kana,
      answer: self.syllable
    }
  end
end
