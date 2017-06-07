class Api::UsersController < ApplicationController
  before_action :require_permission!, only: [:update]

  def create
    if type_params[:submit] == "true"
      @user = User.new(user_params)
      @user.profile_image = File.open('app/assets/images/missing_profile_image.jpg')
      if @user.save
        @user.followings.append(@user)
        log_in!(@user)
        render :show
      else
        render json: @user.errors.messages.keys, status: 422
      end
    else
      @user = User.new(user_params)
      if @user.valid?
        render json: [], status: 422
      else
        render json: @user.errors.messages.keys, status: 422
      end
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

    if privacy_params[:toggle_privacy_setting] == 'true'
      @user.private_account = privacy_params[:private_account]
      if @user.save
        render :show
      else
        render json: ['There was a problem changing your account setting. Please try again soon.'], status: 422
      end
      return
    end

    if remove_profile_image_params[:remove_profile_image] === 'true'
      @user.profile_image = File.open('app/assets/images/missing_profile_image.jpg');
      @user.save
      render :show
      return
    end

    if @user.username == 'world_famous_doge'
      render json: ['Can\'t edit demo account'], status: 422
      return
    end
    if @user.update(user_params)
      render :show
      return
    else
      render json: @user.errors.full_messages, status: 422
      return
    end

    if !password_params[:old_password].empty? && !password_params[:new_password].empty? && !password_params[:new_password_again].empty?
      if password_params[:new_password] == password_params[:new_password_again]
        if @user.valid_password?(password_params[:old_password])
          @user.password = password_params[:new_password]
          if @user.save
            render :show
          else
            render json: ['There was a problem changing your password. Please try again soon.'], status: 422
          end
        else
          render json: ['Your old password was entered incorrectly. Please enter it again.'], status: 422
        end
      else
        render json: ["The two password fields didn't match."], status: 422
      end
      return
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

  def password_params
    params.require(:user).permit(
    :old_password,
    :new_password,
    :new_password_again)
  end

  def privacy_params
    params.require(:user).permit(:private_account, :toggle_privacy_setting)
  end

  def remove_profile_image_params
    params.require(:user).permit(:remove_profile_image)
  end

  def type_params
    params.require(:user).permit(:submit)
  end
end
