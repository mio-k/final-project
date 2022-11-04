class DogsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        dogs = Dog.order(:id)
        render json: dogs
    end
    def show
        dog = find_dog
        render json: dog
    end
    def create
        dog = Dog.create!(dog_params)
        render json: dog, status: :created
    end
    def update
        dog = find_dog
        dog.update(dog_params)
        render json: dog
    end

    def presigned_url
        return unless params[:file_name]
        file_name = params[:file_name].gsub(/\s+/, '') #remove whitespace from the file name.

        presigned_request = S3_BUCKET.presigned_post(
            key: generate_key(file_name),
            success_action_status: '201',
            signature_expiration: (Time.now.utc + 1.minute) #Url will be expired after 1 minute
        )

        render json: {
            url: presigned_request.url,
            s3_upload_params: {
                key: presigned_request.fields["key"],
                success_action_status: presigned_request.fields["success_action_status"],
                x_amz_credential: presigned_request.fields["x-amz-credential"],
                x_amz_algorithm: presigned_request.fields["x-amz-algorithm"],
                x_amz_date: presigned_request.fields["x-amz-date"],
                x_amz_signature: presigned_request.fields["x-amz-signature"]
            }
        }, status: :ok
    end

    private
    def find_dog
        Dog.find(params[:id])
    end
    def dog_params
        params.permit(:name, :breed, :age, :about, :pic, :user_id)
    end
    def render_not_found_response
        render json: {error: "Dog not found"}, status: :not_found 
    end
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages}, status: :unprocessable_entity 
    end 
    def generate_key(file_name)
        # Append a unique id to distinguish 2 files with same name.
        # We can use timestamp as well in place of uuid.
        random_file_key = SecureRandom.uuid
        "#{Rails.env}/attachment/#{random_file_key}-#{file_name}"
    end
end
