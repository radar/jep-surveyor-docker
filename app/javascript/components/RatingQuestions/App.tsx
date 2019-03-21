import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './../../reducers';
import RatingQuestions from './RatingQuestions';
import ShowRatingQuestion from './ShowRatingQuestion';
import NewRatingQuestionForm from './NewRatingQuestionForm';
import EditRatingQuestionForm from './EditRatingQuestionForm';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends React.Component {
  render(): JSX.Element{
    return(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
          <Switch>
            <Route exact path="/rating_questions/new" component={NewRatingQuestionForm}/>
            <Route exact path="/rating_questions/:id/edit" component={EditRatingQuestionForm} />
            <Route exact path="/rating_questions/:id" component={ShowRatingQuestion} />
            <Route exact path="/" component={RatingQuestions} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
