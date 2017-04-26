class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    if @like.save
      render :show
    else
      render json:["Oops! Something went wrong"], status: 422
    end
  end

  def index
    @likes = Like.all
    render :index
  end

  def show
    @like = Like.find(params[:id])
    render :show
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
