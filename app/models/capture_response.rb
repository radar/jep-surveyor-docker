# frozen_string_literal: true

require 'http'

class CaptureResponse
  attr_reader :survey_id, :question_id, :response_id, :value
  def initialize(survey_id, question_id, response_id, value)
    @survey_id = survey_id
    @question_id = question_id
    @response_id = response_id
    @value = value
  end

  def self.for(survey_id:, question_id:, response_id:, value:)
    new(survey_id, question_id, response_id, value).capture_response
  end

  def capture_response
    HTTP.post('http://localhost:8080/responses', json: {
                survey_id: survey_id,
                question_id: question_id,
                response_id: response_id,
                value: value
              })
  end
end
