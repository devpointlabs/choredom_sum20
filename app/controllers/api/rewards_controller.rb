class Api::RewardsController < ApplicationController
  before_action :set_user

  def index
    render json: @user.rewards
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
  
  def destroy
    @user.rewards.find(params[:id]).destroy
    render json: { message: 'reward deleted'}
  end
  
  private
  
  def reward_params
    params.require(:reward).permit(:reward_name, :reward_description, :reward_cost, :reward_claimed, :reward_used)
  end
  
  def set_user
    @user = current_user
  end
  
  
  
end