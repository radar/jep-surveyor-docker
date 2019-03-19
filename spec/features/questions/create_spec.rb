require "rails_helper"

RSpec.describe "Creating questions" do
  it "creates a new question" do
    visit "/"
    click_link "New Question"
    fill_in "Title", with: "Is Capybara Cool?"
    click_button "Create Rating question"

    within(".flash-notice") do
      expect(page).to have_content("Your question has been created.")
    end

    expect(page).to have_content("Is Capybara Cool?")
  end
end