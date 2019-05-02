# frozen_string_literal: true

module Users
  # add authentication class to encode and decode token
  class Authenticate
    def initialize(email:, id:)
      @email = email
      @id = id
    end

    def generate_login_details
      {
        "email": @email,
        "id": @id,
        "token": token
      }
    end

    def token
      JWT.encode payload, secret, 'HS256'
    end

    def payload
      {
        "email": @email,
        "id": @id.to_s
      }
    end

    def secret
      ENV['AUTH_SECRET']
    end

    def self.decode_payload(token)
      token = token.split.last
      return unless token

      JWT.decode token, ENV['AUTH_SECRET'], true, algorithm: 'HS256'
    end
  end
end
