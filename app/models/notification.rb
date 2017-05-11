# == Schema Information
#
# Table name: notifications
#
#  id          :integer          not null, primary key
#  type        :string           not null
#  user_id     :integer          not null
#  notifier_id :integer          not null
#  read        :boolean          default("false"), not null
#  image_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Notification < ApplicationRecord
  validates :category, :user, :notifier, presence: true

  belongs_to :user
  belongs_to :image, :optional => true
  belongs_to :notifier,
    class_name: 'User',
    foreign_key: :notifier_id,
    primary_key: :id
end
