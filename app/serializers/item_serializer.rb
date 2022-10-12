class ItemSerializer < ActiveModel::Serializer
  attributes :id, :description, :pic
  belongs_to :user
  has_many :tags
end
