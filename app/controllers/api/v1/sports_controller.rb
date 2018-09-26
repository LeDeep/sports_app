class Api::V1::SportsController < ApplicationController

  def index
    render json: Sport.all
  end

  private

  def sport_params
    params.require(:sport).permit(:id, :name)
  end
end
