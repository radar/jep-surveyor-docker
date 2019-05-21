module Mutations
  class AuthenticateUser < Mutations::BaseMutation
    type Types::LoginResult

    description 'Attempt a login'

    argument :email, String, required: true
    argument :password, String, required: true

    def resolve(email:, password:)
      user = User.find_by(email: email)

      # validating password match and adding errors if not match
      user.validate_password(password: password)
      return user if user.errors.any?

      #initializing a authenticate instance with user email and id as a payload
      authenticate = Users::Authenticate.new(payload: user.payload)
      {
        "token": authenticate.token
      }
    rescue Mongoid::Errors::DocumentNotFound => e
      e
    end
  end
end
