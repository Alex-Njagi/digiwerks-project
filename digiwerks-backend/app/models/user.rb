class User
  has_secure_password

  has_many :projects, dependent: :destroy
  has_many :project_stages, dependent: :destroy
  has_many :assets, dependent: :destroy
  has_many :asset_versions, dependent: :destroy


  include Mongoid::Document
  include Mongoid::Timestamps

  field :username, type: String
  field :email, type: String
  field :password_digest, type: String
  field :role, type: String
  field :bio, type: String
  field :profile_image_url, type: String

  validates :username, :email, :password, :role, :bio, :profile_image_url, presence: true
  validates :email, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, presence: true, length: { minimum: 6 }, on: :create

  #Invoke normalisation function data before saving
  before_save :downcase_email

  private

  def downcase_email
    self.email = email.downcase if email.present? # Ensure emails are saved in lowercase
  end
end