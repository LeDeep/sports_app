class Api::V1::SportsController < ApplicationController

  def index
    render json: Sport.all
  end

  def add_interest
    @user = User.find(session[:user_id])
    @sport = Sport.find(params[:id])
    @user.sports << @sport
  end

  private

  def sport_params
    params.require(:sport).permit(:id, :name)
  end
end
