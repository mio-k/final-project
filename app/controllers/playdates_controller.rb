class PlaydatesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        playdates = Playdate.all 
        render json: playdates
    end

    def create
        playdate = Playdate.create!(playdate_params)
        render json: playdate, status: :created
    end
    def update
        playdate = find_playdate
        playdate.update(playdate_params)
        render json: playdate
    end
    def destroy
        playdate = find_playdate
        playdate.destroy
        head :no_content
    end

    private
    def find_playdate
        Playdate.find(params[:id])
    end
    def playdate_params
        params.permit(:when, :howlong, :user_id, :who)
    end
    def render_not_found_response
        render json: {error: "Playdate not found"}, status: :not_found 
    end
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages}, status: :unprocessable_entity 
    end 
end
