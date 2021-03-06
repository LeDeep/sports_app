class Api::V1::UsersController < ApplicationController

  def index
    render json: User.all
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    user = User.create(user_params)
    render json: user
  end

  def update
    user = User.find(params[:id])
    user.update_attributes(user_params)
    render json: user
  end

  def user_interests
    interests = user_interests_mapper.find_interests_by_user_id(params[:id].to_i)
    render json: interests
  end

  def user_memberships
    memberships = user_memberships_mapper.find_memberships_by_user_id(params[:id].to_i)
    render json: memberships
  end

  def add_interests
    sport = Sport.find(params[:sport_id])
    user = User.find(params[:user_id])
    user.sports << sport
  end

  def add_memberships
    team = Team.find(params[:team_id])
    user = User.find(params[:user_id])
    user.teams << team
  end

  private

  def user_interests_mapper
    @user_interests_mapper ||= UserInterestsMapper.new
  end

  def user_memberships_mapper
    @user_memberships_mapper ||= UserMembershipsMapper.new
  end

  def user_params
    params.require(:user).permit(:id, :first_name, :last_name, :email, :height_feet, :height_inches, :weight)
  end
end
