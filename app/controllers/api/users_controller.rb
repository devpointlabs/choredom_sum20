class Api::UsersController < ApplicationController
  before_action :authenticate_user!
  
  def update
    user = User.find(params[:id])
    user.name = params[:name] ? params[:name] : user.name
    user.email = params[:email] ? params[:email] : user.email
    
    file = params[:file]
    
    if file
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        user.image = cloud_image['secure_url']
      rescue => e
        render json: { errors: e }, status: 422
      end
    end
    
    if user.save
      render json: user
    else
      render json: { errors: user.errors.full_messages }, status: 422
    end
  end

  def addpoints
    @user = User.find(params[:user_id])
    sum = @user.points.to_i + params[:points].to_i
    @user.update(points: sum )
    render json: @user
  end

  def subpoints
    @user = User.find(params[:user_id])
    sum = @user.points.to_i - params[:points].to_i
    @user.update(points: sum )
    render json: @user
  end

  def userpoints
    @user = User.find(params[:user_id])
    sum = @user.points
    render json: @user
  end

end