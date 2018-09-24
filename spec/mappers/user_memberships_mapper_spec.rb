require "rails_helper"

describe UserMembershipsMapper do
  let!(:user) { FactoryBot.create(:user) }
  let!(:team_1) { FactoryBot.create(:team, id: 1) }
  let!(:team_2) { FactoryBot.create(:team, id: 2) }
  let!(:membership) { FactoryBot.create(:membership, {team_id: 1, user_id: user.id})}
  let!(:membership_2) { FactoryBot.create(:membership, {team_id: 2, user_id: user.id})}
  let(:mapper) { UserMembershipsMapper.new }

  describe "#find_membership_by_user_id" do
    it "returns all memberships for a user" do
      expect(mapper.find_memberships_by_user_id(user.id)).to include(team_1, team_2)
    end

    it "doesn't leak an active record relation" do
      expect(mapper.find_memberships_by_user_id(user.id)).to be_instance_of(Array)
    end
  end
end
