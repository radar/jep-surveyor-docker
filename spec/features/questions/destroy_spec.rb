require "rails_helper"

RSpec.describe "Delete questions" do
  
  it "delete a question" do
    question = RatingQuestion.create(title: "Is Capybara Cool?")
    visit "/"
    click_link "Delete"
    
    page.accept_confirm

    within(".flash-notice") do
      expect(page).to have_content("Deleted Successfully")
    end
    within(".questions") do
      expect(page).not_to have_content("Is Capybara Cool?")
    end
  end
end