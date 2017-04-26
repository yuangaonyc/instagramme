class Like < ApplicationRecord
  validates :user, :image, presence: true
  validates_uniqueness_of :user, scope: [:image]

  belongs_to :user
  belongs_to :image
end
