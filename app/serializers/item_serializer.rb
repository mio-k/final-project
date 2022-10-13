class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :pic
  belongs_to :user
  has_many :tags
end
