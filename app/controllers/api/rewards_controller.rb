class Api::RewardsController < ApplicationController
  before_action :set_user, except: [:usedReward]

  def index
    @rewards = []
    @user.fams.each{ |f|
      Reward.all.each{ |r| 
        if f.id == r.famId
          @rewards << r
        end
      }
    }
    render json: @rewards
  end
  
  def create
    @reward = @user.rewards.new(reward_params)
    if @reward.save
    render json: @reward
    else
    render json: { errors: @reward.errors }, status: :unprocessable_entity
    end
  end
  
  def update
    @reward = @user.rewards.find(params[:id])
    if @reward.update(reward_params)
    render json: @reward
    else
    render json: { errors: @reward.errors }, status: :unprocessable_entity
    end
  end
  
  def usedReward
    Reward.find(params[:id]).destroy
  end
  
  def destroy
    @user.rewards.find(params[:id]).destroy
    render json: { message: 'reward deleted'}
  end

  def rewardclaimed
    @reward = Reward.find(params[:reward_id])
    @reward.update(reward_claimed: !@reward.reward_claimed)
    render json: @reward
  end
  
  private
  
  def reward_params
    params.require(:reward).permit(:reward_name, :reward_description, :reward_cost, :reward_claimed, :reward_used, :famId)
  end
  
  def set_user
    @user = User.find(params[:user_id])
  end

end