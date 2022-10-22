class Dog < ApplicationRecord
    validates :name, presence: true
    belongs_to :user
    has_many :playdates, through: :user
end
