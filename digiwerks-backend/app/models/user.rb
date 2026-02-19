class User
  # Ensure timestamps are automatically created for model records
  include Mongoid::Document
  include Mongoid::Timestamps
  # Ensures secure password encryption for all users
  include ActiveModel::SecurePassword
  has_secure_password

  # Relationships with other models
  has_many :projects, dependent: :destroy
  has_many :project_stages, dependent: :destroy
  has_many :assets, dependent: :destroy
  has_many :asset_versions, dependent: :destroy
  has_many :feedbacks, dependent: :destroy

  # User model field definition
  field :username, type: String
  field :email, type: String
  field :password_digest, type: String
  field :role, type: String, default: "artist"
  field :bio, type: String
  field :profile_image_url, type: String, default: "https://example.com/default-profile.png"

  # Virtual prefixed ID
  def public_id
    "user-#{id.to_s}" # Create a virtual id to distinguish user ids from other system ids
  end

  # Field validations
  # Username
  validates :username, presence: true, length: { minimum: 3, maximum: 30 }

  # Email
  validates :email, presence: true, uniqueness: true, format: {with: URI::MailTo::EMAIL_REGEXP, 
    message: "must be a valid email address"}

  # Password
  validates :password, length: { minimum: 6 },
    format: {
      with: /\A(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      message: "must include at least one uppercase letter, one lowercase letter, and one number"
    }, if: -> { new_record? || !password.nil? }

  # Role restriction
  validates :role, inclusion: { in: %w[artist admin] }

  # Bio length
  validates :bio, length: { maximum: 500 }, allow_blank: true

  # Profile Image URL format
  validates :profile_image_url,
    format: {
      with: URI::DEFAULT_PARSER.make_regexp(%w[http https]),
      message: "must be a valid URL"
    }, allow_blank: true

  # Callbacks to private methods
  before_save :downcase_email

  # Predicate functions to assist in authorisation
  # This function should return true if the user is an admin
  def admin?
    role == "admin"
  end
  # This function should return true if the user is an artist
  def artist?
    role == "artist"
  end

  private

  def downcase_email
    self.email = email.downcase # Email address normalisation
  end

end