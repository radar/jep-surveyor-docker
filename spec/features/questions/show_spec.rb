# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Shows a question' do
  let(:question) { RatingQuestion.create(title: 'Is Capybara Cool?') }

  it 'shows a question' do
    visit rating_question_path(question)

    expect(page).to have_content('Is Capybara Cool?')
  end
end
