class AdminsController < UsersController
    def index
        admins = Admin.all
        render json: admins
    end

    def create
        admin = Admin.new(admin_params)

        if admin.save
            render json: admin, status: :created
        else
            render json: {errors: admin.errors}, status: :unprocessable_entity
        end
    end

    private

    def permitted_params
        admin_params
    end

    def admin_params
        params.permit(:email, :password, :name, :admin_role)
    end

end