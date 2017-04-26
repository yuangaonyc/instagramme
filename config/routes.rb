Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update]
    resources :images, only: [:create, :update, :destroy]
    resources :comments, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy, :index]
    resources :likes
    resources :comments
    resources :users
    resources :images
  end

  root "static_pages#root"
end
