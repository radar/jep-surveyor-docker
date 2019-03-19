class RatingQuestionProps
  attr_reader :rating_question, :rating_question_url

  def initialize(rating_question, rating_question_url)
    @rating_question = rating_question
    @rating_question_url = rating_question_url
  end

  def to_props
    {
      id: @rating_question.id.to_s,
      title: @rating_question.title,
      url: "#{rating_question_url}"
    }
  end
end
