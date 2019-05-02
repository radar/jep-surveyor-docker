# frozen_string_literal: true

class SurveyorSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)
end
