module Types
  class CreateRatingQuestionResult < BaseUnion
    possible_types QuestionType, ValidationError

    def self.resolve_type(object, _context)
      object.persisted? ? QuestionType : ValidationError
    end

  end
end
