# frozen_string_literal: true

require 'http'

class CaptureResponse
  attr_reader :question_id, :previous_response, :current_response
  def initialize(question_id, previous_response, current_response)
    @question_id = question_id
    @previous_response = previous_response
    @current_response = current_response
  end

  def self.for(question_id:, previous_response:, current_response:)
    new(question_id, previous_response, current_response).capture_response
  end

  def capture_response
    HTTP.post('https://postb.in/1564029451736-8012116455938', json: {
                question_id: question_id,
                previous_response: previous_response,
                current_response: current_response
              })
  end
end
