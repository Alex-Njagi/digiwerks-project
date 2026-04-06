Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

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

  get "/my_projects", to: "projects#owned_projects"
  get "/artist_stats", to: "artists#stats"

  get "/admin/view_accounts", to: "artists#view_accounts"
  get "/admin/view_accounts/:id", to: "artists#show_account"

  get "/whoami", to: "sessions#whoami"
  get "/current_artist", to: "sessions#current_artist_info"
  get "/current_admin", to: "sessions#current_admin_info"
end
