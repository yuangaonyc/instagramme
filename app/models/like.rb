# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  image_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
  validates :user, :image, presence: true
  validates_uniqueness_of :user, scope: [:image]

  belongs_to :user
  belongs_to :image
end
