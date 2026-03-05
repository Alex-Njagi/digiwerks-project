class Artist < User
  # include Mongoid::Document
  # include Mongoid::Timestamps

  # Relationships with other models
  has_many :projects, dependent: :destroy
  has_many :project_stages, dependent: :destroy
  has_many :assets, dependent: :destroy
  # has_many :asset_versions, dependent: :destroy
  has_many :feedbacks, dependent: :destroy

  field :username, type: String
  field :bio, type: String
  field :profile_image_url, type: String, default: "https://example.com/default-profile.png"

  # Field validations
  # Username
  validates :username, presence: true, length: { minimum: 3, maximum: 30 }

  # Bio length
  validates :bio, length: { maximum: 500 }, allow_blank: true

  # Profile Image URL format
  validates :profile_image_url,
    format: {
      with: URI::DEFAULT_PARSER.make_regexp(%w[http https]),
      message: "must be a valid URL"
    }, allow_blank: true
end
