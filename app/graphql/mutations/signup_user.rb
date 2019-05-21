module Mutations
  class SignupUser < Mutations::BaseMutation
    type Types::LoginResult

    description 'Signup a new user'

    argument :email, String, required: true
    argument :password, String, required: true
    argument :password_confirmation, String, required: true
    argument :account_id, ID, required: true

    def resolve(email:, password:, password_confirmation:, account_id:)
      user = User.create(
        email: email,
        password: password,
        password_confirmation: password_confirmation,
        account_id: account_id
      )
      return user if user.errors.any?

      authenticate = Users::Authenticate.new(payload: user.payload)
      {
        "token": authenticate.token
      }
    rescue Mongoid::Errors::DocumentNotFound => e
      e
    end
  end
end
