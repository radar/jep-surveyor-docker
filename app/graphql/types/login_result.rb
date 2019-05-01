module Types
  class LoginResult < BaseUnion
    possible_types SuccessfulLoginResult, ValidationError

    def self.resolve_type(object, _context)
      object.is_a?(Hash) ? SuccessfulLoginResult : ValidationError
    end

  end
end
