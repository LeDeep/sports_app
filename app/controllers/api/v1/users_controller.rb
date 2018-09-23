class Api::V1::UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  private

  def transaction_params
    params.require(:user).permit(:id, :first_name, :last_name, :email, :height_feet, :height_inches, :weight)
  end
end
