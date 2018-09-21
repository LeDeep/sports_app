class User < ApplicationRecord
  has_many :memberships
  has_many :interests
  has_many :sports, through: :interests
  has_many :teams, through: :memberships
end
