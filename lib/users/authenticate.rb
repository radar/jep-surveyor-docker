module Users
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

  end
end
