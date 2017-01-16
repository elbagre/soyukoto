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

require 'rails_helper'

RSpec.describe Hiragana, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
