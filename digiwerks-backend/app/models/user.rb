class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include ActiveModel::SecurePassword
  has_secure_password

  field :email, type: String
  field :password_digest, type: String

  def public_id
    "user-#{id.to_s}"
  end

  validate :cannot_be_base_class

  def cannot_be_base_class
    if self.class == User
      errors.add(:base, "Cannot create a base User directly")
    end
  end

  validates :email, presence: true, uniqueness: true, format: {with: URI::MailTo::EMAIL_REGEXP, 
    message: "must be a valid email address"}

  validates :password, length: { minimum: 6 },
    format: {
      with: /\A(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      message: "must include at least one uppercase letter, one lowercase letter, and one number"
    }, if: -> { new_record? || !password.nil? }

  before_save :downcase_email

  private

  def downcase_email
    self.email = email.downcase # Email address normalisation
  end

end