class CreateNotifications < ActiveRecord::Migration[5.0]
  def change
    create_table :notifications do |t|
      t.string :category, null: false
      t.integer :user_id, null: false
      t.integer :notifier_id, null: false
      t.boolean :read, null: false, default: false
      t.integer :image_id
      t.text :content
      t.timestamps
    end

    add_index :notifications, :user_id
  end
end
