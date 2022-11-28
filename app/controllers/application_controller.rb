class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorize

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end


  private
    def authorize
        if !session.include? :user_id
            return render json: { error: "not authorized"},
                status: :unauthorized
        end 
    end
end


