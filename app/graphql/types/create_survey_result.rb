# frozen_string_literal: true

module Types
  class CreateSurveyResult < BaseUnion
    possible_types SurveyType, ValidationError

    def self.resolve_type(object, _context)
      object.persisted? ? SurveyType : ValidationError
    end
  end
end
