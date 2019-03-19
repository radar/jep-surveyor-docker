require "rails_helper"

RSpec.describe "Update a question" do
  
  it "updates a new question" do
    question = RatingQuestion.create(title: "Is Capybara Cool?")
    visit "/"
    click_link "Edit"
    fill_in "Title", with: "Is RSpec Cool?"
    click_button "Update Rating question"

    within(".flash-notice") do
      expect(page).to have_content("Updated Successfully")
    end

    expect(page).to have_content("Is RSpec Cool?")
    
  end
end