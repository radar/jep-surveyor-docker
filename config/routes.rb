# frozen_string_literal: true

Rails.application.routes.draw do
  resources :rating_questions
  root 'rating_questions#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'capture_response' => 'capture_response#create'
end
