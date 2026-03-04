class Feedback
  include Mongoid::Document
  include Mongoid::Timestamps

  field :artist_id, type: BSON::ObjectId
  field :asset_version_id, type: BSON::ObjectId
  field :comment_text, type: String

  belongs_to :artist
  belongs_to :asset_version
end
