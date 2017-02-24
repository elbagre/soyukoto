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
#  grade      :integer          default(0)
#

require 'rails_helper'

RSpec.describe Card, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
