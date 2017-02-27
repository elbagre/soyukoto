# == Schema Information
#
# Table name: public_cards
#
#  id             :integer          not null, primary key
#  public_deck_id :integer          not null
#  searchable_id  :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'rails_helper'

RSpec.describe PublicCard, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
