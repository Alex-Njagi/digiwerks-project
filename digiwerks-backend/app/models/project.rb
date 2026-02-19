class Project
  # Ensure timestamps are automatically created for model records
  include Mongoid::Document
  include Mongoid::Timestamps
  
  # Relationships with other models
  belongs_to :user
  has_many :project_stages, dependent: :destroy

  # Project model field definition
  field :user_id, type: BSON::ObjectId
  field :title, type: String
  field :description, type: String
  field :status, type: String, default: "In-Progress"
  field :start_date, type: Date
  field :end_date, type: Date

  # Virtual prefixed ID
  def public_id
    "proj-#{id.to_s}" # Create a virtual id to distinguish project ids from other system ids
  end

  # Field validations
  validates :title, :status, :start_date, presence: true
  # Bio length
  validates :description, length: { maximum: 500 }, allow_blank: true
  # Role restriction
  validates :status, inclusion: { in: %w[In-Progress Complete] }

  # Display the start date in a conventional human-readable format
  def formatted_start_date
    start_date&.strftime("%d/%m/%y")
  end
  # Display the end date in a conventional human-readable format
  def formatted_end_date
    end_date&.strftime("%d/%m/%y")
  end

end