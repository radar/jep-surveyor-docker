require "rails_helper"

RSpec.describe "DELETE /rating_questions/:id" do
  context "with an existing question" do
    let(:question) do
      RatingQuestion.create!(title: "Hello World")
    end

    it "returns a 204 No Content" do
      delete "/rating_questions/#{question.id}.json"
      expect(response).to have_http_status(:no_content)
      expect(response.body).to eq('')
    end

    it "actually deletes the question" do
      route = "/rating_questions/#{question.id}.json"
      delete route
      get route
      expect(response).to have_http_status(:not_found)
    end
  end

  context "asking to delete a question that doesn't exist" do
    it "returns a 404 Not Found" do
      delete "/rating_questions/i-will-never-exist"
      expect(response).to have_http_status(:not_found)
    end
  end
end