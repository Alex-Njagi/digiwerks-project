class AssetTag
  include Mongoid::Document
  include Mongoid::Timestamps

  field :asset_id, type: BSON::ObjectId
  field :tag_id, type: BSON::ObjectId

  belongs_to :asset
  belongs_to :tag
end
