class AssetTag
  include Mongoid::Document
  include Mongoid::Timestamps

  belongs_to :asset
  belongs_to :tag

  index({ asset_id: 1, tag_id: 1 }, { unique: true })
end
