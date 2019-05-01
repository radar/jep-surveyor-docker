module Types
  class FailedLoginResult < Types::BaseObject
    field :errors, String, null: false

    def errors
      "Password is invalid"
    end
  end
end
