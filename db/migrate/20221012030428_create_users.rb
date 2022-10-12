class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.string :username
      t.string :password_digest
      t.string :pic
      t.string :contact

      t.timestamps
    end
  end
end
