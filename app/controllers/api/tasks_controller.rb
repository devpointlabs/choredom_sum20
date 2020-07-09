class Api::TasksController < ApplicationController
  before_action :set_user

  def index
    render json: @user.tasks
  end
  
  def create
    @task = @user.tasks.new(task_params)
    if @task.save
    render json: @task
    else
    render json: { errors: @task.errors }, status: :unprocessable_entity
    end
  end
  
  def update
    @task = @user.tasks.find(params[:id])
    if @task.update(task_params)
    render json: @task
    else
    render json: { errors: @task.errors }, status: :unprocessable_entity
    end
  end
  
  def destroy
    @user.tasks.find(params[:id]).destroy
    render json: { message: 'task is deleted'}
  end
  
  private
  
  def task_params
    params.require(:task).permit(:task_name, :task_description, :task_value, :task_complete)
  end
  
  def set_user
    @user = current_user
  end
  
  
end
