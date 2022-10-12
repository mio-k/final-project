class Playdate < ApplicationRecord
    validates :when, presence: true
    belongs_to :user 
end
