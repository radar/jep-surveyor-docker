module Mutations
  class CreateSurvey < Mutations::BaseMutation
    type Types::CreateSurveyResult

    argument :name, String, required: true

    def resolve(name:)
      account = context[:current_account]
      account.surveys.create(name: name)
    end
  end
end
