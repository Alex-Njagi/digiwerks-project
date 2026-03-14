class ProjectStage
  include Mongoid::Document
  include Mongoid::Timestamps

  field :stage_name, type: String
  field :stage_order, type: Integer
  field :description, type: String

  belongs_to :project
  has_many :assets, dependent: :destroy
end
