# frozen_string_literal: true

class RatingQuestionsProps
  attr_reader :rating_questions, :rating_questions_url

  def initialize(rating_questions, rating_questions_url)
    @rating_questions = rating_questions
    @rating_questions_url = rating_questions_url
  end

  def to_props
    {
      questions: @rating_questions.map do |rating_question|
        {
          id: rating_question.id.to_s,
          title: rating_question.title,
          url: "#{rating_questions_url}/#{rating_question.id}"
        }
      end
    }
  end
end
