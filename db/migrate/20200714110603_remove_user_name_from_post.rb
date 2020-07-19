class RemoveUserNameFromPost < ActiveRecord::Migration[6.0]
  def change
    remove_column :posts, :user_name, :text
  end
end
