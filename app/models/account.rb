class Account
  include Mongoid::Document

  has_many :users, dependent: :delete_all
  has_many :surveys, dependent: :delete_all
  field :name, type: String
end
