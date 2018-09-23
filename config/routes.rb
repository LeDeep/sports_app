Rails.application.routes.draw do
  root to: "main#index"
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show]
    end
  end
  get "*path" => "main#index", via: :all
end
