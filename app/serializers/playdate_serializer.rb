class PlaydateSerializer < ActiveModel::Serializer
  attributes :id, :when, :howlong, :who, :sitter_id
  belongs_to :user
  has_one :dog, through: :user
end
