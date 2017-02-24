class AddGradeToCards < ActiveRecord::Migration
  def change
    add_column :cards, :grade, :integer, default: 0
  end
end
