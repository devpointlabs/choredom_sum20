Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :fams
    resources :users do
      resources :fam_groups
      resources :tasks
      resources :rewards
    end
  end
end

