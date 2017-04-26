# == Schema Information
#
# Table name: follows
#
#  id           :integer          not null, primary key
#  follower_id  :integer          not null
#  following_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Follow < ApplicationRecord
  validates :follower, :following, presence: true
  validates_uniqueness_of :follower, scop: [:following]

  belongs_to :follower,
    class_name: "User",
    foreign_key: :follower_id,
    primary_key: :id

  belongs_to :following,
    class_name: "User",
    foreign_key: :following_id,
    primary_key: :id
end
