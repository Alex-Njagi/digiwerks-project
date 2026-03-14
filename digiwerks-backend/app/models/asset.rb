class Asset
  include Mongoid::Document
  include Mongoid::Timestamps

  field :asset_name, type: String
  field :asset_description, type: String

  belongs_to :project_stage

  has_many :asset_versions, dependent: :destroy
  has_many :asset_tags, dependent: :destroy
end
