# frozen_string_literal: true

class User
  include Mongoid::Document
  include ActiveModel::SecurePassword

  belongs_to :account

  field :email, type: String
  field :password_digest, type: String

  has_secure_password

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i.freeze
  validates :account_id, presence: true
  validates :email, presence: true,
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  validates :password, presence: true,
                       length: { minimum: 8 }

  def validate_password(password:)
    return self if authenticate(password)

    errors.add(:password, 'Invalid')
    self
  end
end
