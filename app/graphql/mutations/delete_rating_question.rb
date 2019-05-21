module Mutations
  class DeleteRatingQuestion < Mutations::BaseMutation
    type Types::DeleteRatingQuestionResult

    argument :id, ID, required: true

    def resolve(id:)
      rating_question = RatingQuestion.find(id)
      rating_question.destroy
      rating_question
    rescue Mongoid::Errors::DocumentNotFound => e
      e
    end
  end
end
