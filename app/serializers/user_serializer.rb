class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :pic, :contact
  has_one :dog 
  has_many :items
  has_many :playdates 
end
