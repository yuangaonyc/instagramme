class Api::FeedController < ApplicationController
  def index
    @feed = current_user.following_images.page(params[:page]).per(5)
    render :index
  end
end
