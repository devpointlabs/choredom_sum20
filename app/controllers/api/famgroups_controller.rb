class FamGroupController < FamilyController
  before_action :set_family
  before_action :set_name only: [:show, :edit, :update, :destroy]
  before_action :set_admins only: [:show, :edit, :update, :destroy]

  def index
    @fam_members = @famgroup.users.all
  end

  def show
  end

  def new
    @user = @famgroup.users.new
  end

  def edit
  end

  def create
    @user = @famgroup.user.new(user_params)
    
    if @user.save
      redirect_to @user, notice: 'Family Member is Added.'
    else
      render :new
    end
  end

  def update
    if @user.update(user_params)
      redirect_to @user, notice: 'Family Member is Updated.'
    else
      render :edit
    end
  end

  def destroy
    @student.destroy
    redirect_to famgroup_users_path(@famgroup), notice: 'Family Member has been removed.'
  end

  private

    def set_famgroup
      @famgroup = Famgroup.find(params[:famgroup_id])
    end

    def set_famgroup
      @user= @famgroup.users.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:name, :email, :points, :admin)
    end
end
