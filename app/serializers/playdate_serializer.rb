class PlaydateSerializer < ActiveModel::Serializer
  attributes :id, :when, :howlong, :who
  belongs_to :user
end
