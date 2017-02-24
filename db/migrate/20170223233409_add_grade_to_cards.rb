class AddGradeToCards < ActiveRecord::Migration
  def change
    add_column :cards, :grade, :float, default: 0
  end
end
