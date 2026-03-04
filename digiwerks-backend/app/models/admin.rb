class Admin < User
  # include Mongoid::Document
  # include Mongoid::Timestamps

  field :name, type: String
  field :admin_role, type: String

  # Field validations
  # Name
  validates :name, presence: true

  # Role restriction
  validates :admin_role, inclusion: { in: %w[Content-Moderation Account-Management] }
end