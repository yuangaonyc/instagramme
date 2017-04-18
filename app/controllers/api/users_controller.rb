class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render "/api/users/show"
    else
      render @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by_id(params[:id])
    render "/api/users/show"
  end
  private
  def user_params
    params.require(:user).psermit(:username, :password)
  end
end
