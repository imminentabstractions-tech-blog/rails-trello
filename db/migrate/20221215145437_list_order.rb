class ListOrder < ActiveRecord::Migration[7.0]
  def change
    add_column :lists, :order, :integer, :default => 0
  end
end
