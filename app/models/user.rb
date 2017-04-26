# == Schema Information
#
# Table name: users
#
#  id                         :integer          not null, primary key
#  username                   :string           not null
#  email                      :string           not null
#  password_digest            :string           not null
#  session_token              :string           not null
#  full_name                  :string
#  bio                        :text
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#  profile_image_file_name    :string
#  profile_image_content_type :string
#  profile_image_file_size    :integer
#  profile_image_updated_at   :datetime
#

class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil:true}
  validates :email, email_format: { message: "doesn't look like an email address" }
  validates :username, format: { without: /\s/ }
  validates :username, format: { without: /@/ }


  after_initialize :ensure_session_token

  attr_reader :password

  has_attached_file :profile_image,
    styles: { medium: "300x300>", thumb: "100x100>" },
    default_url: "missing_profile_image.jpg"
  validates_attachment_content_type :profile_image, content_type: /\Aimage\/.*\z/

  has_many :images
  has_many :comments
  has_many :likes

  has_many :follower_follows,
    class_name: "Follow",
    foreign_key: :follower_id,
    primary_key: :id

  has_many :following_follows,
    class_name: "Follow",
    foreign_key: :following_id,
    primary_key: :id

  has_many :followers,
    through: :following_follows,
    source: :follower

  has_many :followings,
    through: :follower_follows,
    source: :following

  has_many :following_images,
    through: :followings,
    source: :images


  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end
end
