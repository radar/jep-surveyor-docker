module Types
  class MutationType < Types::BaseObject
    field :create_rating_question, CreateRatingQuestionResult, null: false do
      argument :title, String, required: true
      argument :survey_id, ID, required: true
    end

    def create_rating_question(title:, survey_id:)
      RatingQuestion.create(title: title, survey_id: survey_id)
    end

    field :delete_rating_question, DeleteRatingQuestionResult, null: false do
      argument :id, ID, required: true
    end

    def delete_rating_question(id:)
      begin
        rating_question = RatingQuestion.find(id)
        rating_question.destroy
        rating_question
      rescue Mongoid::Errors::DocumentNotFound => e
          e
      end
    end


    field :update_rating_question, UpdateRatingQuestionResult, null: false do
      argument :id, ID, required: true
      argument :title, String, required: true
    end

    def update_rating_question(id:, title:)
      begin
        rating_question = RatingQuestion.find(id)
        rating_question.update(title: title)
        rating_question
      rescue Mongoid::Errors::DocumentNotFound => e
        e
      end
    end

    field :create_survey, CreateSurveyResult, null: false do
      argument :name, String, required: true
    end

    def create_survey(name:)
      Survey.create(name: name)
    end

  end
end
