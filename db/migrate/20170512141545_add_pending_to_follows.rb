class AddPendingToFollows < ActiveRecord::Migration[5.0]
  def change
    add_column :follows, :pending, :boolean, null: false, default: false
  end
end
