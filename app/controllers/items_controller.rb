class ItemsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def index
        items = Item.all.order(:id)
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
        render json: item, status: :ok
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
    def generate_key(file_name)
        # Append a unique id to distinguish 2 files with same name.
        # We can use timestamp as well in place of uuid.
        random_file_key = SecureRandom.uuid
        "#{Rails.env}/attachment/#{random_file_key}-#{file_name}"
    end
end
