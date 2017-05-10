class AddPrivateAccountToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :private_account, :boolean, null: false, default: false
  end
end
