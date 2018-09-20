require "rails_helper"

describe Api::V1::UsersController do
  let!(:user_1) { User.create(id: 1, first_name: "Aaron", last_name: "Rodgers", email: 'arodgers@goat.com', height_feet: 6, height_inches: 2, weight: 220)}

  before do
    request.env["HTTP_ACCEPT"] = 'application/json'
  end

  describe "#index" do
    it "should route from GET /transactions" do
      expect({get: "api/v1/users"}).to route_to(controller: "api/v1/users", action: "index")
    end

    it "returns all transactions" do
      get :index, params: {}
      expect(User.count).to eq 1
    end

    it "responds with http status 200" do
      get :index, params: {}
      expect(response.status).to eq 200
    end
  end
end
