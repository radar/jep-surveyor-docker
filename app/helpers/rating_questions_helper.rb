module RatingQuestionsHelper
  def rating_questions_props
    {
      questions: @rating_questions.map do |rating_question|
        {
          id: rating_question.id.to_s,
          title: rating_question.title,
          url: rating_question_path(rating_question),
        }
      end,
    }
  end

  def rating_question_props
    if @rating_question.persisted?
      {
        id: @rating_question.id.to_s,
        title: @rating_question.title,
        url: rating_question_url(@rating_question),
        post_url: rating_questions_url,
      }
    else
      {
        id: @rating_question.id.to_s,
        title: @rating_question.title,
        url: '',
        post_url: rating_questions_url,
      }
    end
  end
end
