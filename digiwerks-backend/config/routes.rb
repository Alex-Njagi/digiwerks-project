Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  # root "posts#index"

  # resources :artists do
  #   resources :projects, only: [:index, :create]
  # end

  resources :artists do
    resources :projects, shallow: true
  end

  resources :projects do
    member do
      get :workspace
    end
    resources :project_stages, shallow: true
  end
  
  resources :project_stages do
    resources :assets, path: "project_assets", shallow: true
  end

  resources :assets, path: "project_assets" do
    resources :asset_versions, shallow: true
    resources :asset_tags, only: [:index, :create, :destroy]
  end

  resources :asset_versions do
    resources :feedbacks, shallow: true
  end
  
  resources :admins

  resources :tags, only: [:index, :show]

  post "/artist_login", to: "sessions#artist_login"
  post "/admin_login", to: "sessions#admin_login"
  delete "/logout", to: "sessions#logout"

  # get "/artists/:artist_id/owned_projects", to: "projects#owned_projects"
  get "/my_projects", to: "projects#owned_projects"
  get "/artist_stats", to: "artists#stats"
  
  get "/admin/view_accounts", to: "artists#view_accounts"
  get "/admin/view_accounts/:id", to: "artists#show_account"
  # get "/admin/view_projects", to: "projects#moderation_dashboard"

  get "/whoami", to: "sessions#whoami"
  get "/current_artist", to: "sessions#current_artist_info"
  get "/current_admin", to: "sessions#current_admin_info"
end
