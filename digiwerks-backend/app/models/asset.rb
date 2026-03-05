class Asset
  include Mongoid::Document
  include Mongoid::Timestamps

  field :artist_id, type: BSON::ObjectId
  # field :project_id, type: BSON::ObjectId
  field :project_stage_id, type: BSON::ObjectId
  field :asset_name, type: String
  field :asset_description, type: String

  belongs_to :project_stage
  belongs_to :artist
  # belongs_to :project, through: :project_stage

  has_many :asset_versions, dependent: :destroy
  has_many :asset_tags, dependent: :destroy
end
