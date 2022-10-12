class ItemsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def index
        free_items = FreeItem.all 
        render json free_items
    end

    def show
        free_item = find_free_item
        render json: free_item
    end
    def create
        free_item = FreeItem.create!(free_item_params)
        render free_item, status: :created
    end
    def update
        free_item = find_free_item
        free_item.update(free_item_params)
        render json: free_item
    end
    def destroy
        free_item = find_free_item
        free_item.destroy
        head :no_content
    end

    private
    def find_free_item
        FreeItem.find(params[:id])
    end
    def free_item_params
        params.permit(:name, :description, :pic, :user_id, :tag_id)
    end
    def render_not_found_response
        render json: {error: "Dog not found"}, status: :not_found 
    end
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages}, status: :unprocessable_entity 
    end 
end
