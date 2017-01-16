# == Schema Information
#
# Table name: hiraganas
#
#  id         :integer          not null, primary key
#  kana       :string           not null
#  group      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Hiragana < ActiveRecord::Base
  validates :group, presence: true
end
