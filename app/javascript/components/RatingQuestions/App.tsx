import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import RatingQuestions from './RatingQuestions';
import ShowRatingQuestion from './ShowRatingQuestion';
import NewRatingQuestionForm from './NewRatingQuestionForm';
import EditRatingQuestionForm from './EditRatingQuestionForm';

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(): JSX.Element{
    return(
      <Router>
        <Switch>
          <Route exact path="/rating_questions/new" component={NewRatingQuestionForm}/>
          <Route exact path="/rating_questions/:id/edit" component={EditRatingQuestionForm} />
          <Route exact path="/rating_questions/:id" component={ShowRatingQuestion} />
          <Route exact path="/" component={RatingQuestions} />
        </Switch>
      </Router>
    )
  }
}

export default App