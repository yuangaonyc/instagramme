class Api::UsersController < ApplicationController
  # before_action :require_permission!, only: [:update]

  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(username: params[:id])
    render :show
  end

  def update
    debugger
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(
    :username,
    :password,
    :email,
    :full_name,
    :bio,
    :profile_image)
  end
end
