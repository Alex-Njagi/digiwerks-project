class Project
  include Mongoid::Document
  include Mongoid::Timestamps

  before_validation { self.end_date = nil if end_date.blank? }
  
  belongs_to :artist
  has_many :project_stages, dependent: :destroy

  field :title, type: String
  field :description, type: String
  field :status, type: String, default: "In-Progress"
  field :cover_img, type: String, default: "https://placehold.co/400x400"
  field :start_date, type: Date
  field :end_date, type: Date, default: "empty"

  # Virtual prefixed ID
  def public_id
    "proj-#{id.to_s}" # Create a virtual id to distinguish project ids from other system ids
  end

  
  validates :title, :status, :start_date, presence: true
  validates :description, length: { maximum: 500 }, allow_blank: true
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