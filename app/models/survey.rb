class Survey
  include Mongoid::Document
  has_many :rating_questions, dependent: :delete_all
  belongs_to :account
  field :name, type: String

  validates :name, presence: true
  validates :account_id, presence: true
end
