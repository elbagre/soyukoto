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

class PublicCard < ActiveRecord::Base
  validates :public_deck_id, :searchable_id, presence: true

  belongs_to :deck,
    class_name: "PublicDeck",
    foreign_key: :public_deck_id

  belongs_to :searchable
end
