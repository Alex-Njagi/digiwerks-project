class Tag
  include Mongoid::Document
  include Mongoid::Timestamps

  field :tag_name, type: String

  has_many :asset_tags, dependent: :destroy
end