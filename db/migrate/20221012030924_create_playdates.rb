class CreatePlaydates < ActiveRecord::Migration[7.0]
  def change
    create_table :playdates do |t|
      t.string :when
      t.string :howlong
      t.integer :user_id
      t.string :who
      t.integer :sitter_id

      t.timestamps
    end
  end
end
