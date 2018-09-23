class Sport < ApplicationRecord
  mount_uploader :icon, SportIconUploader
  has_many :interests
  has_many :users, through: :interests

  validates :name, presence: true
end
