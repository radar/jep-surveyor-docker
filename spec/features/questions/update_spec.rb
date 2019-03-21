require "rails_helper"

RSpec.describe "Update a question" do
  let(:question) { RatingQuestion.create(title: "Is Capybara Cool?") }

  it "updates a new question" do
    visit "/"
    click_link "Create New Question"
    fill_in "title", with: "Is Capybara Cool?"
    click_button "Add New Question"
    visit "/"
    click_link "Is Capybara Cool?"
    click_link "Edit"
    fill_in "title", with: "Is RSpec Cool?"
    click_button "Update Question"
    click_link "Back"
    within("[data-automation-id=questions-list]") do
      expect(page).to have_content("Is RSpec Cool?")
    end
  end
end
