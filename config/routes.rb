Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :create, :update, :show]
    resources :images, only: [:create, :update, :destroy, :show]
    resources :comments, only: [:create, :destroy, :index]
    resources :likes, only: [:create, :destroy, :index]
    resources :follows, only: [:create, :destroy, :index, :update]
    resources :feed, only: [:index]
    resources :notifications
  end

  root "static_pages#root"
end
