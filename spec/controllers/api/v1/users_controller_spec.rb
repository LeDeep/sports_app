require "rails_helper"

describe Api::V1::UsersController do
  let!(:user) {create(:user)}

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

  describe "#show" do
    it "should route from GET /emails/:id" do
      expect({:get => "api/v1/users/1"}).to route_to(:controller => "api/v1/users", :action => "show", :id => "1")
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
end
