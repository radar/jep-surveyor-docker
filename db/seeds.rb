# frozen_string_literal: true

Account.destroy_all

culture_amp = Account.create(name: 'Culture Amp')
coles = Account.create(name: 'Coles')

User.create(
  email: 'tanim@gmail.com',
  password: 'password',
  account_id: culture_amp.id
)

User.create(
  email: 'mahmud@gmail.com',
  password: 'password',
  account_id: coles.id
)

culture_amp_survey = culture_amp.surveys.create(
  name: 'CA Engagement Survey'
)

coles_survey = coles.surveys.create(
  name: 'Coles Engagement Survey'
)

culture_amp_survey.rating_questions.create(
  title: 'ca rating question 1'
)

culture_amp_survey.rating_questions.create(
  title: 'ca rating question 2'
)

culture_amp_survey.rating_questions.create(
  title: 'ca rating question 3'
)

coles_survey.rating_questions.create(
  title: 'coles rating question 1'
)

coles_survey.rating_questions.create(
  title: 'coles rating question 2'
)

coles_survey.rating_questions.create(
  title: 'coles rating question 3'
)
