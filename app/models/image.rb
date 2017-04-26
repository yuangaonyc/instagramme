# == Schema Information
#
# Table name: images
#
#  id                 :integer          not null, primary key
#  user_id          :integer          not null
#  location           :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Image < ApplicationRecord
  validates :user, :image, presence: true

  has_attached_file :image,
    styles: { medium: "300x300>", thumb: "100x100>" },
    default_url: "missing_profile_image.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :user
  has_many :comments
  has_many :likes
end
