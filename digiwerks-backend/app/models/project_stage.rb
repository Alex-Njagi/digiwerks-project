class ProjectStage
  include Mongoid::Document
  include Mongoid::Timestamps

  # field :user_id, type: BSON::ObjectId
  # field :project_id, type: BSON::ObjectId
  field :stage_name, type: String
  field :stage_order, type: Integer
  field :description, type: String

  belongs_to :project
  has_many :assets, dependent: :destroy
  # belongs_to :user, through: :project
end
