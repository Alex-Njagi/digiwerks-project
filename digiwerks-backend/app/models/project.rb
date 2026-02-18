class Project
  belongs_to :user
  has_many :project_stages

  include Mongoid::Document
  include Mongoid::Timestamps

  field :user_id, type: BSON::ObjectId
  field :title, type: String
  field :description, type: String
  field :status, type: String
  field :start_date, type: Date
  field :end_date, type: Date

end
