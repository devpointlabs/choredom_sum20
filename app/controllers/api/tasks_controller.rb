class Api::TasksController < ApplicationController
  before_action :set_user

  def index
    @tasks = []
    @user.fams.each{ |f|
      Task.all.each{ |t| 
        if f.id == t.famId
          @tasks << t
        end
      }
    }
    render json: @tasks
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

  def taskcomplete
    @task = @user.tasks.find(params[:task_id])
    @task.update(task_complete: !@task.task_complete)
    render json: @task
  end
  
  private
  
  def task_params
    params.require(:task).permit(:task_name, :task_description, :task_value, :task_complete, :famId)
  end
  
  def set_user
    @user = User.find(params[:user_id])
  end
  
  


end
