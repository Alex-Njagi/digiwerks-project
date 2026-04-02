class Artist < User
  has_many :projects, dependent: :destroy
  has_many :feedbacks, dependent: :destroy

  field :username, type: String
  field :bio, type: String
  field :profile_image_url, type: String, 
  default: "https://image2url.com/r2/default/images/1772557830988-428d3761-1c85-4bb4-a11f-70ec21d38637.png"

  validates :username, presence: true, length: { minimum: 3, maximum: 30 }
  validates :bio, length: { maximum: 500 }, allow_blank: true
end
