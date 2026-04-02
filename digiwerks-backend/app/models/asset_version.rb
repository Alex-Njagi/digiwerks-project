class AssetVersion
  include Mongoid::Document
  include Mongoid::Timestamps

  field :version_number, type: Integer
  field :file_url, type: String, default: "https://example.com/default-profile.png"
  field :change_notes, type: String

  belongs_to :asset
  has_many :feedbacks, dependent: :destroy
end
