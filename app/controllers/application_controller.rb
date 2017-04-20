class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def log_in!(user)
    session[:session_token] = user.reset_session_token!
  end

  def log_out!
    current_user.reset_session_token! if logged_in?
    session[:session_token] = nil
  end

  def current_user
    User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def require_logged_in!
    unless logged_in?
      render json: ['invalid credentials'], status: 401
    end
  end

  def require_permission!
    unless current_user.id === params[:user][:id].to_i
      render json: ['invalid credentials'], status: 401
    end
  end
end
