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

class PublicDeck < ActiveRecord::Base
  validates :user_id, :name, :description, presence: true

  has_many :cards,
    class_name: "PublicCard",
    foreign_key: :public_deck_id
end
