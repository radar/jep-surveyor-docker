require "rails_helper"

RSpec.describe "Shows a question" do
  it "shows a question" do
    visit "/"
    click_link "Create New Question"
    fill_in "title", with: "Is Capybara Cool?"
    click_button "Add New Question"
    visit "/"
    click_link "Is Capybara Cool?"
    expect(page).to have_content("Is Capybara Cool?")
  end
end
