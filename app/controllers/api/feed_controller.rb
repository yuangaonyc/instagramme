class Api::FeedController < ApplicationController
  def index
    @feed = current_user.following_images.page(params[:page])
    .order(created_at: :desc).per(5)
    .includes(:user)
    render :index
  end
end
