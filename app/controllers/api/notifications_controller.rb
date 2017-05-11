class Api::NotificationsController < ApplicationController
  def create
    @notification = Notification.new(notification_params)
    @notifcation[:read] = false
    @notification.save
    render :show
  end

  def index
    @notifications = Notification.all.order(created_at: :desc)
    render :index
  end

  def update
    @notification = Notification.find(params[:id])
    @notification.update(notification_params)
    @notification.save
    render :show
  end

  def destroy
    @notification = Notification.find(params[:id])
    @notification.delete
    render :show
  end

  private
  def notification_params
    params.require(:notification).permit(:read, :category, :user_id, :notifier_id, :content, :image_id)
  end
end
