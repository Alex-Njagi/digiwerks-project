class AssetVersion
  include Mongoid::Document
  include Mongoid::Timestamps

  field :asset_id, type: BSON::ObjectId
  field :version_number, type: Integer
  field :file_url, type: String
  field :change_notes, type: String

  belongs_to :user
  belongs_to :asset
end
