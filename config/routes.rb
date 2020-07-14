Rails.application.routes.draw do
  root "posts#index"
  devise_for :users
  resources :posts, only: [:index, :new, :create, :show]
  resources :users, only: [:edit, :update]
end
