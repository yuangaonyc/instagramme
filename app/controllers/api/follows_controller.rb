class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    if @follow.save
      render :show
    else
      render json: ["Can't follow right now..."], status: 422
    end
  end

  def index
    @follows = Follow.all
    render :index
  end

  def destroy
    @follow = Follow.find(params[:id])
    if @follow.destroy
      render :show
    else
      render json: ["Can't unfollow right now..."], status: 422
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:following_id)
  end

end
