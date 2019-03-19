require "rails_helper"

RSpec.describe "Update a question" do
  
  it "updates a new question" do
    question = RatingQuestion.create(title: "Is Capybara Cool?")
    visit "/"
    click_link "Is Capybara Cool?"
    click_link "Edit"
    fill_in "title", with: "Is RSpec Cool?"
    click_button "Update Question"
    visit "/"
    
    within("[data-automation-id=questions-list]") do
      expect(page).to have_content("Is RSpec Cool?")
    end
  end
end