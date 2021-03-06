class Api::FamgroupsController < ApplicationController
  before_action :set_fam
  before_action :set_famgroup, only: [:update, :destroy]

  def index
    render json: @fam.famgroups
  end

  def create
    @famgroup = @fam.famgroups.new(famgroup_params)
    if @famgroup.save
      render json: @famgroup
    else
      render json: { errors: @famgroup.errors }, status: :unprocessable_entity
    end
  end

  def join
    email = params[:email]
    user = User.find_by(email: email)
    @famgroup = @fam.famgroups.new(last_name: @fam.fam_name, user_id: user.id)
    if @famgroup.save
      render json: @famgroup
    else
      render json: { errors: @famgroup.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @famgroup.update(famgroup_params)
      render json: @famgroup
    else
      render json: { errors: @famgroup.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @famgroup.destroy
    render json: { message: 'This Family Group has been removed'}
  end

  private

    def set_fam
      @fam = Fam.find(params[:fam_id])
    end

    def set_famgroup
      @famgroup = @fam.famgroups.find(params[:id])
    end

    def famgroup_params
      params.require(:famgroup).permit(:last_name, :user_id)
    end
    
end