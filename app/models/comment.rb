class Comment < ApplicationRecord
  validates :user, :image, :body, presence: true;

  belongs_to :user
  belongs_to :image
end
