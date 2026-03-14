class Feedback
  include Mongoid::Document
  include Mongoid::Timestamps

  field :comment_text, type: String

  belongs_to :artist
  belongs_to :asset_version
end
