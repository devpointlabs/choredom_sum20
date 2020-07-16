Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :fams do
      resources :famgroups
    end
    resources :users do
      resources :tasks
      resources :rewards
    end
    get 'userfams/:user_id', to: 'fams#userfams'
  end
end