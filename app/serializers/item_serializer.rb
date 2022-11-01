class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :pic, :tag_ids
  belongs_to :user
  has_many :tags
end
