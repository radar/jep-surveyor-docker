module Types
  class QueryType < Types::BaseObject
    field :rating_questions, [QuestionType], null: false
    def rating_questions
      RatingQuestion.all
    end

    field :rating_question, QuestionType, null: false do
      argument :id, ID, required: true
    end
    def rating_question(id:)
      RatingQuestion.find(id)
    end

    field :surveys, [SurveyType], null: false
    def surveys
      Survey.all
    end

    field :survey, SurveyType, null: false do
      argument :survey_id, ID, required: true
    end

    def survey(survey_id:)
      Survey.find(survey_id)
    end
  end
end
