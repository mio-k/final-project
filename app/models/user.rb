class User < ApplicationRecord
    validates :username, presence: true
    has_secure_password
    has_one :dog, dependent: :destroy
    has_many :items, dependent: :destroy
    has_many :playdates, dependent: :destroy
end
