
import * as React from 'react'
import axios from 'axios'
import uuidv4 from 'uuid/v4';
import * as styles from './index.module.scss'
import RatingQuestion from './RatingQuestion'
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
interface Question {
  id: string,
  title: string,
  url: string
}

interface RatingQuestionsProps extends RouteComponentProps<any>, React.Props<any> {
  questions: Question[]
}

class RatingQuestions extends React.Component<RatingQuestionsProps, {}> {
  state = {
    questions: []
  }

  componentDidMount = () => {
    axios.get("/rating_questions.json")
      .then(response => {
        this.setState({
          questions: response.data
        })
      })
  }
  render(): JSX.Element {
    const survey_id = uuidv4();
    const response_id = uuidv4();
    return(
      <div data-automation-id='questions-list'>
        <div className={styles.heading}>
          <Link to="/rating_questions/new"><h1>Create New Question</h1></Link>
        </div>
        {this.state.questions.map((question) => <RatingQuestion key={question.id} {...question} survey_id={survey_id} response_id={response_id} />)}
      </div>
    )
  }
}

export default withRouter(RatingQuestions)
