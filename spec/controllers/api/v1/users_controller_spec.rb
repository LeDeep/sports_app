require "rails_helper"

describe Api::V1::UsersController do
  let!(:user) {create(:user)}

  before do
    request.env["HTTP_ACCEPT"] = 'application/json'
  end

  describe "#index" do
    it "should route from GET /users" do
      expect({get: "api/v1/users"}).to route_to(controller: "api/v1/users", action: "index")
    end

    it "returns all users" do
      get :index, params: {}
      expect(User.count).to eq 1
    end

    it "responds with http status 200" do
      get :index, params: {}
      expect(response.status).to eq 200
    end
  end

  describe "#show" do
    it "should route from GET /users/:id" do
      expect({get: "api/v1/users/1"}).to route_to(controller: "api/v1/users", action: "show", id: "1")
    end

    it "should return a 200 status code" do
      get :show, params: { id: user.id }
      expect(response.response_code).to eq(200)
    end

    it "should return attributes for a given email" do
      get :show, params: { id: user.id }
      body = JSON.parse(response.body)
      expect(body["id"]).to eq (user.id)
      expect(body["first_name"]).to eq (user.first_name)
      expect(body["last_name"]).to eq (user.last_name)
      expect(body["email"]).to eq (user.email)
      expect(body["height_feet"]).to eq (user.height_feet)
      expect(body["height_inches"]).to eq (user.height_inches)
      expect(body["weight"]).to eq (user.weight)
    end
  end

  describe "#create" do
    it "routes from POST /api/v1/users" do
      expect({ :post => "/api/v1/users" }).to route_to(:controller => "api/v1/users", :action => "create")
    end

    it "responds with http status 200" do
      post :create, params: {user: {id: user.id}}
      expect(response.status).to eq 200
    end
  end

  describe "#user_interests" do
    let(:mapper) { instance_double("UserInterestsMapper") }
    let(:sport) { FactoryBot.create(:sport) }
    let(:interest) { FactoryBot.create(:interest, {user_id: user.id, sport_id: sport.id}) }

    before do
      allow(UserInterestsMapper).to receive(:new).with(no_args).and_return(mapper)
    end

    it "should route from GET /users/user_interests" do
      expect({get: "api/v1/users/user_interests/1"}).to route_to(controller: "api/v1/users", action: "user_interests", id: "1")
    end

    it "returns the users interests" do
      expect(mapper).to receive(:find_interests_by_user_id).with(user.id).and_return(interest)
      get :user_interests, params: { id: user.id }
    end
  end

  describe "#user_memberships" do
    let(:mapper) { instance_double("UserMembershipsMapper") }
    let(:team) { FactoryBot.create(:team) }
    let(:memberships) { FactoryBot.create(:membership, {user_id: user.id, team_id: team.id}) }

    before do
      allow(UserMembershipsMapper).to receive(:new).with(no_args).and_return(mapper)
    end

    it "should route from GET /users/user_memberships" do
      expect({get: "api/v1/users/user_memberships/1"}).to route_to(controller: "api/v1/users", action: "user_memberships", id: "1")
    end

    it "returns the users memberships" do
      expect(mapper).to receive(:find_memberships_by_user_id).with(user.id).and_return(memberships)
      get :user_memberships, params: { id: user.id }
    end
  end
end
