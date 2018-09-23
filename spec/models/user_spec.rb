require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { create(:user) }
  let!(:invalid_user) { create(:user, id: 2) }

  context "valid params" do
    it "is a valid user with valid attributes" do
      expect(user).to be_valid
      expect(User.count).to eq(2)
    end
  end

  context "invalid params" do
    it "is not valid when email is invalid" do
      user.email = '23423@.com'
      expect(user).to_not be_valid
    end
  end

  context "normalizaton" do
    it "capitalizes the first name" do
      expect(invalid_user.first_name).to eq("Mitch")
    end

    it "capitalizes the last name" do
      expect(invalid_user.last_name).to eq("Trubisky")
    end

    it "downcases the email address" do
      expect(invalid_user.email).to eq("mitch@trubisky.com")
    end
  end
end
