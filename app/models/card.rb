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
#

class Card < ActiveRecord::Base
  belongs_to :deck
  belongs_to :item,
    polymorphic: true
end
