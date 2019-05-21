module Queries
  # This class is used as a parent for all queries, and it is the place to have common utilities
  class BaseQuery < ::GraphQL::Schema::Query
    null false
  end
end
