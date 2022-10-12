class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname :pic, :contact
  has_one :dog 
  has_many :free_items
  has_many :dogsits 
end
