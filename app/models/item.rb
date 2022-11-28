class Item < ApplicationRecord
    validates :name, :description, presence: true
    validates :description, length: {minimum: 20}
    belongs_to :user
    has_many :item_tags
    has_many :tags, through: :item_tags
end
