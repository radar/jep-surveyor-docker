require "rails_helper"

RSpec.describe "Update a question" do
  
  
  let(:question) { RatingQuestion.create(title: "Is Capybara Cool?") }
  
  it "updates a new question" do
    visit edit_rating_question_path(question)
    fill_in "title", with: "Is RSpec Cool?"
    click_button "Update Question"
    
    within("[data-automation-id=questions-list]") do
      expect(page).to have_content("Is RSpec Cool?")
    end
  end
end