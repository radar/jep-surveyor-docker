require 'net/http'
require 'uri'

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
    uri = URI 'https://postb.in/1564023697746-2610029494389'
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true if uri.scheme == 'https'

    http.post(uri,{
      "question_id"=> question_id,
      "previous_response"=> previous_response,
      "current_response"=> current_response,
    }.to_json, 'content-Type' => 'application/json')
  end
end
