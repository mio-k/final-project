Rails.application.routes.draw do
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/authorized", to: "users#authenticate"

  resources :users, only: [:show, :update]
  resources :dogs, only: [:index, :show, :create, :update]
  resources :items 
  resources :playdates, only: [:index, :create, :update, :destroy]
end
