class Api::FeedController < ApplicationController
  def index
    @feed = current_user.following_images.order(created_at: :desc).page(params[:page]).per(1)
    render :index
  end
end
