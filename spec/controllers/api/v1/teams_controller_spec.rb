require "rails_helper"

describe Api::V1::SportsController do
  let!(:team) {create(:team)}

  before do
    request.env["HTTP_ACCEPT"] = 'application/json'
  end

  describe "#index" do
    it "should route from GET /team" do
      expect({get: "api/v1/teams"}).to route_to(controller: "api/v1/teams", action: "index")
    end

    it "returns all teams" do
      get :index, params: {}
      expect(Team.count).to eq 1
    end

    it "responds with http status 200" do
      get :index, params: {}
      expect(response.status).to eq 200
    end
  end
end
