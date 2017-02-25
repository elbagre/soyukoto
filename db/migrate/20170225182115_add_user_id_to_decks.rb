class AddUserIdToDecks < ActiveRecord::Migration
  def change
    add_column :decks, :user_id, :integer, null: false
  end
end
