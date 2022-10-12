class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :age, :about, :pic
  belongs_to :user
end
