class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    following = User.find(@follow[:following_id])
    @follow.pending = true if following.private_account
    if @follow.save
      render :show
    else
      render json: ["Can't follow right now..."], status: 422
    end

    @notification = Notification.create({
      user_id: follow_params[:following_id],
      notifier_id: current_user.id,
      category: 'follow',
      image_id: nil
    })
  end

  def index
    @follows = Follow.includes(:follower).includes(:following).all.reject {
      |follow|
      follow.follower_id == current_user.id &&
      follow.following_id == current_user.id
    }
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
