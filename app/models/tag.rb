class Tag < ApplicationRecord
    validates :category, presence: true
    has_many :item_tags
    has_many :items, through: :item_tags
end
