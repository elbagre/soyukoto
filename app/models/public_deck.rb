class PublicDeck < ActiveRecord::Base
  validates :user_id, :name, :description, presence: true
end
