# == Schema Information
#
# Table name: decks
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer          not null
#

require 'rails_helper'

RSpec.describe Deck, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
