class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    if @like.save
      render :show
    else
      render json:["Oops! Something went wrong"], status: 422
    end

    user_id = Image.find(like_params[:image_id]).user_id
    @notification = Notification.create({
      user_id: user_id,
      notifier_id: current_user.id,
      category: "like",
      image_id: like_params[:image_id]
      })
  end

  def index
    @likes = Like.all.includes(:user)
    render :index
  end

  def destroy
    @like = Like.find(params[:id])
    if @like.destroy
      render :show
    else
      render json:["Oops! Something went wrong"], status: 422
    end
  end

  private
  def like_params
    params.require(:like).permit(:image_id)
  end
end
