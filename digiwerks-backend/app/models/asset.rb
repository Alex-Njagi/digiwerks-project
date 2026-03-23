class Asset
  include Mongoid::Document
  include Mongoid::Timestamps

  field :asset_name, type: String
  field :asset_description, type: String
  field :asset_tag, type: String

  belongs_to :project_stage

  has_many :asset_versions, dependent: :destroy

  validates :asset_tag, inclusion: { in: %w[Sketch Illustration Line-Art Digital-Painting Graphic-Design] }
end
