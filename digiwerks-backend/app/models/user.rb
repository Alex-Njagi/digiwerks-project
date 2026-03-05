class User
  # Prevent this class from being persisted to a collection
  # primary_abstract_class
  # self.abstract_class = true

  # Ensure timestamps are automatically created for model records
  include Mongoid::Document
  include Mongoid::Timestamps
  # Ensures secure password encryption for all users
  include ActiveModel::SecurePassword
  has_secure_password

  # User model field definition
  field :email, type: String
  field :password_digest, type: String

  # Virtual prefixed ID
  def public_id
    "user-#{id.to_s}" # Create a virtual id to distinguish user ids from other system ids
  end

  validate :cannot_be_base_class

  def cannot_be_base_class
    if self.class == User
      errors.add(:base, "Cannot create a base User directly")
    end
  end

  # Field validations
  # Email
  validates :email, presence: true, uniqueness: true, format: {with: URI::MailTo::EMAIL_REGEXP, 
    message: "must be a valid email address"}

  # Password
  validates :password, length: { minimum: 6 },
    format: {
      with: /\A(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      message: "must include at least one uppercase letter, one lowercase letter, and one number"
    }, if: -> { new_record? || !password.nil? }

  # Callbacks to private methods
  before_save :downcase_email

  private

  def downcase_email
    self.email = email.downcase # Email address normalisation
  end

end