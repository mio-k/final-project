class RemovePicFromUser < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :pic, :string
  end
end
