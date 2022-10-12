class PlaydatesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        dogsits = Dogsit.all 
        render json: dogsits
    end

    def create
        dogsit = Dogsit.create!(dogsit_params)
        render json: dogsit, status: :created
    end
    def update
        dogsit = find_dogsit
        dogsit.update(dogsit_params)
        render json: dogsit
    end
    def destroy
        dogsit = find_dogsit
        dogsit.destroy
        head :no_content
    end

    private
    def find_dogsit
        Dogsit.find(params[:id])
    end
    def dogsit_params
        params.permit(:when, :howlong)
    end
    def render_not_found_response
        render json: {error: "Dog not found"}, status: :not_found 
    end
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages}, status: :unprocessable_entity 
    end 
end
