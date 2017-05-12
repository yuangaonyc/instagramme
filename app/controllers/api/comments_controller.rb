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

    user_id = Image.find(comment_params[:image_id]).user_id
    return if user_id == current_user.id
    @notification = Notification.create({
      user_id: user_id,
      notifier_id: current_user.id,
      category: 'comment',
      content: comment_params[:body],
      image_id: comment_params[:image_id]
    })
  end

  def index
    @comments = Comment.all.includes(:user)
    render :index
  end

  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :image_id)
  end
end
