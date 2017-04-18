class Api::SessionsController < ApplicationController
  def create
    username = params[:user][:username]
    password = params[:user][:password]
    @user = User.find_by(username: username) || User.find_by(email: username) || nil
    if @user
      if @user.valid_password?(password)
        log_in!(@user)
        render "api/users/show"
      else
        render json:["Sorry, your password was incorrect. Please double-check your password"], status: 401
      end
    else
      render json:["The username you entered doesn't belong to an account. Please check your username and try again"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out!
      render "api/users/show"
    else
      render json: ["Already logged out"], status: 404
    end
  end
end
