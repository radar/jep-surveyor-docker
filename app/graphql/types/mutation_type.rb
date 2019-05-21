# frozen_string_literal: true

module Types
  class MutationType < ::GraphQL::Schema::Object
    field :create_rating_question, mutation: Mutations::CreateRatingQuestion
    field :delete_rating_question, mutation: Mutations::DeleteRatingQuestion
    field :update_rating_question, mutation: Mutations::UpdateRatingQuestion
    field :create_survey, mutation: Mutations::CreateSurvey
    field :signup_user, mutation: Mutations::SignupUser
    field :login_user, mutation: Mutations::AuthenticateUser
  end
end
