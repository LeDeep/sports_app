require "rails_helper"

describe UserInterestsMapper do
  let!(:user) { FactoryBot.create(:user) }
  let!(:sport_1) { FactoryBot.create(:sport, id: 1) }
  let!(:sport_2) { FactoryBot.create(:sport, id: 2) }
  let!(:interest) { FactoryBot.create(:interest, {sport_id: 1, user_id: user.id})}
  let!(:interest_2) { FactoryBot.create(:interest, {sport_id: 2, user_id: user.id})}
  let(:mapper) { UserInterestsMapper.new }

  describe "#find_interests_by_user_id" do
    it "returns all interests for a user" do
      expect(mapper.find_interests_by_user_id(user.id)).to include(sport_1, sport_2)
    end

    it "doesn't leak an active record relation" do
      expect(mapper.find_interests_by_user_id(user.id)).to be_instance_of(Array)
    end
  end
end
