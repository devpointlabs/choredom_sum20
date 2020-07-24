Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :fams do
      get '/members', to: 'fams#members'
      resources :famgroups
    end

    resources :users do
      resources :tasks
      resources :rewards
    end
    get 'userfams/:user_id', to: 'fams#userfams'
    get '/:user_id/rewardclaimed/:reward_id', to: 'rewards#rewardclaimed'
    get '/:user_id/taskcomplete/:task_id', to: 'tasks#taskcomplete'
    get '/addpoints/:user_id/:points', to: 'users#addpoints'
    get '/subpoints/:user_id/:points', to: 'users#subpoints'
    get '/userpoints/:user_id/:points', to: 'users#userpoints'
    post '/:fam_id/join', to: 'famgroups#join'
    get '/:id/usereward', to: 'rewards#usedReward'
  end
end

