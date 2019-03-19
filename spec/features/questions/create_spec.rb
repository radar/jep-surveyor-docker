require "rails_helper"

RSpec.describe "Creating questions" do
  it "creates a new question" do
    visit "/"
    click_link "New Question"
    fill_in "title", with: "Is Capybara Cool?"
    click_button "Add Question"

    visit "/"
    within("[data-automation-id=questions-list]") do
      expect(page).to have_content("Is Capybara Cool?")
    end
  end
end