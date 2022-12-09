class Add < ActiveRecord::Migration[7.0]
  def change
    add_column :boards, :color, :string
  end
end
