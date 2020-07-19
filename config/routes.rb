Rails.application.routes.draw do
  root "posts#index"
  devise_for :users
  resources :posts do
    resources :comments, only: :create
    collection do
      get 'search'
    end
  end
  resources :users, only: [:edit, :update, :show]
end
