class CreateHiraganas < ActiveRecord::Migration
  def change
    create_table :hiraganas do |t|
      t.string :kana
      t.string :syllable
      t.integer :group, null: false

      t.timestamps null: false
    end
    add_index :hiraganas, :kana
    add_index :hiraganas, [:kana, :group]
    add_index :hiraganas, [:kana, :syllable]
  end
end
