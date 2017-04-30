class Api::UsersController < ApplicationController
  before_action :require_permission!, only: [:update]

  def create
    @user = User.new(user_params)
    @user.profile_image = File.open('app/assets/images/missing_profile_image.jpg')
    if @user.save
      @user.followings.append(@user)
      log_in!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all.includes(:images)
    render :index
  end

  def show
    @user = User.find_by(username: params[:id])
    render :show
  end

  def update
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
