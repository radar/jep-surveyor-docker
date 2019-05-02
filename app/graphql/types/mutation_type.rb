# frozen_string_literal: true

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
      rating_question = RatingQuestion.find(id)
      rating_question.destroy
      rating_question
    rescue Mongoid::Errors::DocumentNotFound => e
      e
    end

    field :update_rating_question, UpdateRatingQuestionResult, null: false do
      argument :id, ID, required: true
      argument :title, String, required: true
    end

    def update_rating_question(id:, title:)
      rating_question = RatingQuestion.find(id)
      rating_question.update(title: title)
      rating_question
    rescue Mongoid::Errors::DocumentNotFound => e
      e
    end

    field :create_survey, CreateSurveyResult, null: false do
      argument :name, String, required: true
    end

    def create_survey(name:)
      Survey.create(name: name)
    end

    field :signup_user, CreateUserResult, null: false do
      argument :email, String, required: true
      argument :password, String, required: true
      argument :password_confirmation, String, required: true
    end

    def signup_user(email:, password:, password_confirmation:)
      User.create(email: email, password: password, password_confirmation: password_confirmation)
    end

    field :login_user, LoginResult, null: false do
      argument :email, String, required: true
      argument :password, String, required: true
    end

    def login_user(email:, password:)
      user = User.find_by(email: email)
      user.validate_password(password: password)
      return user if user.errors.any?

      authenticate = Users::Authenticate.new(email: user.email, id: user.id)
      authenticate.generate_login_details
    rescue Mongoid::Errors::DocumentNotFound => e
      e
    end
  end
end
