Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :decks, only: [:create, :destroy, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :hiraganas, only: [:show, :index]
    resources :katakanas, only: [:show, :index]
    resources :searchables, only: [:index]
  end

  root "static_pages#root"
end
