class RatingQuestionProps
  attr_reader :rating_question, :rating_questions_url

  def initialize(rating_question, rating_questions_url)
    @rating_question = rating_question
    @rating_questions_url = rating_questions_url
  end

  def to_props
    {
      id: @rating_question.id.to_s,
      title: @rating_question.title,
      url: "#{rating_questions_url}/#{@rating_question.id}",
    }
  end
end
