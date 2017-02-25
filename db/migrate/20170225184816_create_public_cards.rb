class CreatePublicCards < ActiveRecord::Migration
  def change
    create_table :public_cards do |t|
      t.integer :public_deck_id, null: false
      t.integer :searchable_id, null: false

      t.timestamps null: false
    end
    add_index :public_cards, [:public_deck_id, :searchable_id], unique: true
  end
end
