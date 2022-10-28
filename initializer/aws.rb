Aws.config.update(
  credentials: Aws::Credentials.new(
    Rails.application.credentials.aws.fetch(:access_key_id),
    Rails.application.credentials.aws.fetch(:secret_access_key)
  ),
  region: Rails.application.credentials.aws.fetch(:region),
)

S3_BUCKET = Aws::S3::Resource.new.bucket(
  Rails.application.credentials.aws.fetch(:bucket_name)
)