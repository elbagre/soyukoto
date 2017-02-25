class CreatePublicDecks < ActiveRecord::Migration
  def change
    create_table :public_decks do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.string :description

      t.timestamps null: false
    end
    add_index :public_decks, [:user_id, :name], unique: true
  end
end
