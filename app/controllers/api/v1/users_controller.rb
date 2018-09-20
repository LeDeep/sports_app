class Api::V1::UsersController < ApplicationController
  def index
    render json: User.all
  end

  private

  def transaction_params
    params.require(:user).permit(:id, :first_name, :last_name, :email, :height_feet, :height_inches, :weight)
  end
end
