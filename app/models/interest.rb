class Interest < ApplicationRecord
  belongs_to :user
  belongs_to :sport

  validates :sport_id, :uniqueness => {scope: :user_id}
end
