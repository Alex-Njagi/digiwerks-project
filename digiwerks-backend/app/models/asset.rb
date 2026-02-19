class Asset
  include Mongoid::Document
  include Mongoid::Timestamps

  field :user_id, type: BSON::ObjectId
  field :project_id, type: BSON::ObjectId
  field :project_stage_id, type: BSON::ObjectId
  field :asset_name, type: String
  field :asset_type, type: String
  field :asset_description, type: String

  belongs_to :project
  belongs_to :user
  belongs_to :project_stage
end
