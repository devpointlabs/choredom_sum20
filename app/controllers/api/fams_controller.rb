class Api::FamsController < ApplicationController
  before_action :set_user

  def index
    render json: Fam.find(params[:id]).users
  end

  # unprocessable_entity had no colon before it
  def create
    @fam = Fam.new(fam_params)
    if @fam.save
      render json: @fam
    else
      render json: { errors: @fam.errors }, status: :unprocessable_entity
    end
  end
  
  # unprocessable_entity had no colon before it
  def update
    @fam = Fam.find(params[:id])
    if @fam.update(fam_params)
      render json: @fam
    else 
    render json: { errors: @fam.errors }, status: :unprocessable_entity
    end
  end

  # added destroy
  def destroy
    Fam.find(params[:id]).destroy
    render json: { messsage: 'Fam deleted' }
  end

  private

    def fam_params
      params.require(:fam).permit(:fam_name, :fam_admins, :fam_members)
    end

    def set_user
      @user = current_user
    end

  
end