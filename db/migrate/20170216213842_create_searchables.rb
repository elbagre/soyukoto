class CreateSearchables < ActiveRecord::Migration
  def change
    create_table :searchables do |t|
      t.string :translation, default: ""
      t.string :transliteration, null: false
      t.integer :item_id, null: false
      t.string :item_type, null: false

      t.timestamps null: false
    end
    add_index :searchables, [:item_id, :item_type], unique: true
  end
end
