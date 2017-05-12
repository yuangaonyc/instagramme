class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id

    following = User.find(@follow[:following_id])
    @follow.pending = following.private_account ? true : false

    if @follow.save
      render :show
    else
      render json: ["Can't follow right now..."], status: 422
    end

    if @follow.pending
      @notification = Notification.create({
        user_id: follow_params[:following_id],
        notifier_id: current_user.id,
        category: 'follow-request',
        image_id: nil
        }) if Notification.where(
        category: 'follow-request',
        user_id: follow_params[:following_id],
        notifier_id: current_user.id).empty?
    else
      @notification = Notification.create({
        user_id: follow_params[:following_id],
        notifier_id: current_user.id,
        category: 'follow',
        image_id: nil
      }) if Notification.where(
        category: 'follow',
        user_id: follow_params[:following_id],
        notifier_id: current_user.id).empty?
    end
  end

  def index
    @follows = Follow.includes(:follower).includes(:following).all.reject {
      |follow|
      follow.follower_id == current_user.id &&
      follow.following_id == current_user.id
    }
    render :index
  end

  def update
    @follow = Follow.find(params[:id])
    @follow.update(follow_params)
    @follow.save
    render :show
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
    params.require(:follow).permit(:following_id, :pending)
  end

end
