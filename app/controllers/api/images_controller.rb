class Api::ImagesController < ApplicationController
  def create
    @image = Image.new(image_params)
    @image.user_id = current_user.id
    if @image.save
      render "api/images/show"
    else
      render json:["Uploading failed..."], status: 422
    end
  end

  def show
    @image = Image.find(params[:id])
    render :show
  end

  def update
    @image = Image.find(params[:id])
    if @image.update(image_params)
      render :show
    else
      render json:@image.errors.full_messages, status: 422
    end
  end

  def destroy
    @image = Image.find(params[:id])
    @image.delete
    render :show
  end

  private
  def image_params
    params.require(:image).permit(:location, :image)
  end
end
