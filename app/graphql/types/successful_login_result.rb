# frozen_string_literal: true

module Types
  class SuccessfulLoginResult < Types::BaseObject
    field :token, String, null: false
  end
end
