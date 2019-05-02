# frozen_string_literal: true

module Types
  class DeleteRatingQuestionResult < BaseUnion
    possible_types QuestionType, ValidationError, DocumentNotFoundError

    def self.resolve_type(object, _context)
      return DocumentNotFoundError if object.is_a?(Mongoid::Errors::DocumentNotFound)

      object.persisted? ? ValidationError : QuestionType
    end
  end
end
