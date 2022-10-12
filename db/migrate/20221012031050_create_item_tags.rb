class CreateItemTags < ActiveRecord::Migration[7.0]
  def change
    create_table :item_tags do |t|
      t.integer :item_id
      t.integer :tag_id

      t.timestamps
    end
  end
end
