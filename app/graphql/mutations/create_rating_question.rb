module Mutations
  class CreateRatingQuestion < Mutations::BaseMutation
    type Types::CreateRatingQuestionResult

    argument :title, String, required: true
    argument :survey_id, ID, required: true

    def resolve(title:, survey_id:)
      RatingQuestion.create(title: title, survey_id: survey_id)
    end
  end
end
