class CreateDogs < ActiveRecord::Migration[7.0]
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :breed
      t.integer :age
      t.string :pic
      t.string :about
      t.integer :user_id

      t.timestamps
    end
  end
end
