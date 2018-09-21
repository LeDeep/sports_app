class User < ApplicationRecord
  has_and_belongs_to_many :teams
  has_many :memberships
  has_many :interests
  has_many :sports, through: :interests
end
