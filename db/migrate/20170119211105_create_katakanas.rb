class CreateKatakanas < ActiveRecord::Migration
  def change
    create_table :katakanas do |t|
      t.string :kana
      t.string :syllable
      t.integer :group, null: false

      t.timestamps null: false
    end
    add_index :katakanas, :kana
    add_index :katakanas, [:kana, :group]
    add_index :katakanas, [:kana, :syllable]
  end
end
