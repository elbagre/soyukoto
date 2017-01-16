class User < ActiveRecord::Base

  attr_reader :password

  validates :first_name, :last_name, :session_token, presence: true
  validates :email, :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.find_by_credentials(user_tag, password)
    User.find_by(username: user_tag) ? user = User.find_by(username: user_tag)
                                     : user = User.find_by(email: user_tag)
    return nil unless user && user.password_is?(password)
  end

  def password_is?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(20)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  def ensure_session_token_uniqueness
    while User.exists?(session_token: self.session_token)
      self.session_token = generate_session_token
    end
  end
end
