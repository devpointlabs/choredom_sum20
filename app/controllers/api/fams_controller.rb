class Api::FamsController < ApplicationController

  def index
    render json:
  end
  
  def create
    @fam = Fam.new(fam_params)
    if @fam.save
      render json: @fam
    else
      render json: { errors: @fam.errors }, status: unprocessable_entity
    end
  end
  
  def update
    @fam = Fam.find(params[:id])
    if @fam.update(fam_params)
      render json: modelname
    else 
    render json: { errors: @fam.errors }, status: unprocessable_entity
    end
  end

private
  def fam_params
    params.require(:fam).permit(:fam_name, :fam_admins, :fam_members)
  end

end
