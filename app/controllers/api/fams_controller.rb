class Api::FamsController < ApplicationController
  before_action :set_user

  def index
    render json: Fam.find(params[:id]).users
  end

  def members
    render json: Fam.find(params[:fam_id]).users
  end

  def userfams
    @fams = []
    Fam.all.map { |f|
      f.users.each { |u|
        if u.id === params[:user_id].to_i
          @fams << f
        end
      }
    }
    render json: @fams
  end

  def create
    @fam = Fam.new(fam_params)
    if @fam.save
      render json: @fam
    else
      render json: { errors: @fam.errors }, status: :unprocessable_entity
    end
  end
  
  def update
    @fam = Fam.find(params[:id])
    if @fam.update(fam_params)
      render json: @fam
    else 
    render json: { errors: @fam.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @fam = Fam.find(params[:id])
    @fam.destroy
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