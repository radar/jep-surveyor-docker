
import * as React from 'react'
import axios from 'axios'
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { fetchQuestions } from "../../actions"
import * as styles from './index.module.scss'
import RatingQuestion from './RatingQuestion'
interface Question {
  id: string,
  title: string,
  url: string
}

interface RatingQuestionsProps extends RouteComponentProps<any>, React.Props<any> {
  questions: Question[],
  fetchQuestions(): void
}

class RatingQuestions extends React.Component<RatingQuestionsProps, {}> {
  componentDidMount = () => {
    this.props.fetchQuestions();
  }
  render(): JSX.Element {
    console.log(this.props.questions)
    return(
      <div data-automation-id='questions-list'>
        <div className={styles.heading}>
          <Link to="/rating_questions/new"><h1>Create New Question</h1></Link>
        </div>
        {this.props.questions.map((question) => <RatingQuestion key={question.id} {...question} />)}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {questions: state.questions}
}

export default connect(mapStateToProps, { fetchQuestions })(withRouter(RatingQuestions));
