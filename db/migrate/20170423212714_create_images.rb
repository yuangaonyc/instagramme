class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.integer :author_id, null: false
      t.string :location
      t.timestamps
    end

    add_index :images, :author_id
  end
end
