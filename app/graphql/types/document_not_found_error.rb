# frozen_string_literal: true

module Types
  class DocumentNotFoundError < Types::BaseObject
    field :errors, String, null: false

    def errors
      'No document was found.'
    end
  end
end
