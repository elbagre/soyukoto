# == Schema Information
#
# Table name: public_decks
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  name        :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'rails_helper'

RSpec.describe PublicDeck, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
