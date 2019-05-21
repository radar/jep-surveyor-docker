# frozen_string_literal: true

module Users
  # add authentication class to encode and decode token
  class Authenticate
    def initialize(payload:)
      @payload = payload
    end

    def token
      JWT.encode @payload, ENV['AUTH_SECRET'], 'HS256'
    end

    def self.decode_payload(token)
      token = token.split.last
      return unless token

      JWT.decode token, ENV['AUTH_SECRET'], true, algorithm: 'HS256'
    end
  end
end
