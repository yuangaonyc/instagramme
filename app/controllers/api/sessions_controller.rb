class Api::SessionsController < ApplicationController
  def create
    un = params[:user][:username]
    pw = params[:user][:password]
    @user = User.find_by(username: un) || User.find_by(email: un) || nil
    if @user
      if @user.valid_password?(pw)
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
    log_out!
    render "/"
  end
end
