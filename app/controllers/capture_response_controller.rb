

class CaptureResponseController < ApplicationController
  def create
    question_id = params.fetch('question_id')
    previous_response = params.fetch('previous_response')
    current_response = params.fetch('current_response')

    CaptureResponse.for(
      question_id: question_id,
      previous_response: previous_response,
      current_response: current_response,
    )
  end
end
