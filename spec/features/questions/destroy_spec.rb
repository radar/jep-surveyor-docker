require "rails_helper"

RSpec.describe "Delete questions" do
  
  it "delete a question" do
    question = RatingQuestion.create(title: "Is Capybara Cool?")
    visit "/"
    click_link "Is Capybara Cool?"
    click_button "Delete"
    visit "/"
    within("[data-automation-id=questions-list]") do
      expect(page).not_to have_content("Is Capybara Cool?")
    end
  end
end