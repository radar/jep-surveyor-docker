module Mutations
  class UpdateRatingQuestion < Mutations::BaseMutation
    type Types::UpdateRatingQuestionResult

    argument :id, ID, required: true
    argument :title, String, required: true

    def resolve(id:, title:)
      rating_question = RatingQuestion.find(id)
      rating_question.update(title: title)
      rating_question
    rescue Mongoid::Errors::DocumentNotFound => e
      e
    end
  end
end
