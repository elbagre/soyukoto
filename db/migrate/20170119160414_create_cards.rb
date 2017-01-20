class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.integer :deck_id, null: false
      t.integer :item_id, null: false
      t.string :item_type, null: false

      t.timestamps null: false
    end
  end
end
