class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        users = User.all 
        render json users
    end

    def show
        user = find_user
        render json: user
    end
    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end
    def authenticate
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    private
    def find_user
        User.find(params[:id])
    end
    def user_params
        params.permit(:firstname, :lastname, :username, :password, :pic, :contact )
    end
    def render_not_found_response
        render json: {error: "Dog not found"}, status: :not_found 
    end
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages}, status: :unprocessable_entity 
    end 
end
