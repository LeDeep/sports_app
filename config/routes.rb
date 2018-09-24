Rails.application.routes.draw do
  root to: "main#index"
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show] do
        collection do
          get :user_interests
          get :user_memberships
        end
      end
    end
  end
  get "*path" => "main#index", via: :all
end
