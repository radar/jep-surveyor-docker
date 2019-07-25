# frozen_string_literal: true

class CaptureResponseController < ApplicationController
  def create
    CaptureResponse.for(
      question_id: params[:question_id],
      previous_response: params[:previous_response],
      current_response: params[:current_response]
    )
  end
end
