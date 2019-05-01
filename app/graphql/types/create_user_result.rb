module Types
  class CreateUserResult < BaseUnion
    possible_types UserType, ValidationError

    def self.resolve_type(object, _context)
      object.persisted? ? UserType : ValidationError
    end

  end
end
