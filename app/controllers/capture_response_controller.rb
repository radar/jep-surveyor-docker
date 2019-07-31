# frozen_string_literal: true

class CaptureResponseController < ApplicationController
  def create
    CaptureResponse.for(
      survey_id: params[:survey_id],
      question_id: params[:question_id],
      response_id: params[:response_id],
      value: params[:value]
    )
  end
end
