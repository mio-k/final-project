Rails.application.routes.draw do
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/authorized", to: "users#authenticate"
  post "/items/presigned-url", to: "items#presigned_url"
  post "/dogs/presigned-url", to: "dogs#presigned_url"

  resources :users, only: [:show]
  resources :dogs, only: [:index, :show, :create, :update]
  resources :items 
  resources :tags, only: [:index]
  resources :playdates, only: [:index, :create, :destroy]

end
