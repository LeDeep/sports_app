class User < ApplicationRecord
  has_many :memberships
  has_many :interests
  has_many :sports, through: :interests
  has_many :teams, through: :memberships

  validates :first_name, :last_name, :email, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  before_save :capitalize_first_name, :capitalize_last_name, :downcase_email_address

  private

  def capitalize_first_name
    first_name.capitalize!
  end

  def capitalize_last_name
    last_name.capitalize!
  end

  def downcase_email_address
    email.downcase!
  end
end
