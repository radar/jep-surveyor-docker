module RatingQuestionsHelper
  def rating_questions_props
    RatingQuestionsProps.new(@rating_questions, rating_questions_url).to_props
  end
  def rating_question_props
    RatingQuestionProps.new(@rating_question, rating_question_url(@rating_question)).to_props
  end
end
