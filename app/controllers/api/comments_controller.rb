class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id;
    if @comment.save
      @image = Image.find(@comment.image_id)
      render :show
    else
      render json: ["Oops! Something went wrong"], status: 422
    end
  end

  def index
    @comments = Comment.all
    render :index
  end

  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render :show
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :image_id)
  end
end
