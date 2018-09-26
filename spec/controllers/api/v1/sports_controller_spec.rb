require "rails_helper"

describe Api::V1::SportsController do
  let!(:sport) {create(:sport)}

  before do
    request.env["HTTP_ACCEPT"] = 'application/json'
  end

  describe "#index" do
    it "should route from GET /sports" do
      expect({get: "api/v1/sports"}).to route_to(controller: "api/v1/sports", action: "index")
    end

    it "returns all sports" do
      get :index, params: {}
      expect(Sport.count).to eq 1
    end

    it "responds with http status 200" do
      get :index, params: {}
      expect(response.status).to eq 200
    end
  end
end
