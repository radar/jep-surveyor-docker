module Queries
  class User < Queries::BaseQuery
    type Types::UserType

    def resolve
      context[:current_user]
    end
  end
end
