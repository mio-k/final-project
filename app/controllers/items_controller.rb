class ItemsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def index
        items = Item.all 
        render json: items
    end

    def show
        item = find_item
        render json: item
    end
    def create
        item = Item.create!(item_params)
        render json: item, status: :created
    end
    def update
        item = find_item
        item.update(item_params)
        render json: item
    end
    def destroy
        item = find_item
        item.destroy
        head :no_content
    end

    private
    def find_item
        Item.find(params[:id])
    end
    def item_params
        params.permit(:name, :description, :pic, :user_id, tag_ids: [])
    end
    def render_not_found_response
        render json: {error: "Item not found"}, status: :not_found 
    end
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages}, status: :unprocessable_entity 
    end 
end
