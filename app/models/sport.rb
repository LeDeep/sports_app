class Sport < ApplicationRecord
  mount_uploader :icon, SportIconUploader
  has_many :interests
end
