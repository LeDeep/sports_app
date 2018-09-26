class Api::V1::TeamsController < ApplicationController

  def index
    render json: Team.all
  end

  private

  def team_params
    params.require(:team).permit(:id, :name)
  end
end
