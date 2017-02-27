Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :decks, only: [:create, :destroy, :show, :index] do
      member do
        get :reset
      end
    end
    resource :session, only: [:create, :destroy, :show]
    resources :hiraganas, only: [:show, :index]
    resources :katakanas, only: [:show, :index]
    resources :searchables, only: [:index]
    resources :cards, only: [:create, :destroy, :update]
    resources :public_decks, only: [:create, :destroy, :index, :show]
  end

  root "static_pages#root"
end
