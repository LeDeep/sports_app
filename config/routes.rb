Rails.application.routes.draw do
  root to: "main#index"
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show, :create, :update] do
        collection do
          get '/user_interests/:id', to: 'users#user_interests'
          get '/user_memberships/:id', to: 'users#user_memberships'
          post '/add_interests/:user_id/sport/:sport_id', to: 'users#add_interests'
        end
      end

      resources :sports, only: [:index]
      resources :teams, only: [:index]
    end
  end
  get "*path" => "main#index", via: :all
end
