class Admin < User
  field :name, type: String
  field :admin_role, type: String

  validates :name, presence: true
  validates :admin_role, inclusion: { in: %w[content_moderation account_management] }
end