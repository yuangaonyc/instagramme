class Api::LikesController < ApplicationController
  def create
    like = Like.new(like_params)
    if like.save
      render :index
    else
      render json:["Oops! Something went wrong"], status: 422
    end
  end

  def index
    @likes = Like.all
    render :index
  end

  def destroy
    like = Like.find(params[:id])
    if like.destroy
      render :index
    else
      render json:["Oops! Something went wrong"], status: 422
    end
  end
end
