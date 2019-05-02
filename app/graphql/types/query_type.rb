# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :rating_questions, [QuestionType], null: false
    field :rating_question, QuestionType, null: false do
      argument :id, ID, required: true
    end
    field :surveys, [SurveyType], null: false
    def surveys
      user.account.surveys
    end
    field :survey, SurveyType, null: false do
      argument :survey_id, ID, required: true
    end
    field :user, UserType, null: false

    def rating_questions
      user.account.surveys.map(&:rating_questions).flatten
    end

    def rating_question(id:)
      RatingQuestion.find(id)
    end

    def survey(survey_id:)
      Survey.find(survey_id)
    end

    def user
      context[:current_user]
    end
  end
end
