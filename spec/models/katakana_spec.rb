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

require 'rails_helper'

RSpec.describe Katakana, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
