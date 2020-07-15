Rails.application.routes.draw do
  root "posts#index"
  devise_for :users
  resources :posts
  resources :users, only: [:edit, :update, :show]
end
