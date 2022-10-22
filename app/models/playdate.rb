class Playdate < ApplicationRecord
    validates :when, presence: true
    belongs_to :user 
    has_one :dog, through: :user
end
