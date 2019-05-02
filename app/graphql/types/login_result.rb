# frozen_string_literal: true

module Types
  class LoginResult < BaseUnion
    possible_types SuccessfulLoginResult, ValidationError, DocumentNotFoundError

    def self.resolve_type(object, _context)
      return DocumentNotFoundError if object.is_a?(Mongoid::Errors::DocumentNotFound)

      object.is_a?(Hash) ? SuccessfulLoginResult : ValidationError
    end
  end
end
