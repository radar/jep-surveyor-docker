module Types
  class LoginResult < BaseUnion
    possible_types UserType, ValidationError

    def self.resolve_type(object, _context)
      object.errors.any? ? ValidationError : UserType
    end

  end
end
