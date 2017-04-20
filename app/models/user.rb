class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil:true}

  after_initialize :ensure_session_token

  attr_reader :password

  has_attached_file :profile_image,
    styles: { medium: "300x300>", thumb: "100x100>" },
    default_url: "missing_profile_image.jpg"
  validates_attachment_content_type :profile_image, content_type: /\Aimage\/.*\z/

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
