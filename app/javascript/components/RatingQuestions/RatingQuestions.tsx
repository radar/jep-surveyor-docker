
import * as React from 'react'
import axios from 'axios'
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { fetchQuestions } from "../../actions"
import * as styles from './index.module.scss'
import RatingQuestion from './RatingQuestion'
export interface Question {
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
    if(this.props.questions.length === 0){
      this.props.fetchQuestions();
    }
  }

  renderRatingQuestions = () => {
    if(this.props.questions.length > 0){
      return this.props.questions.map(question => {
        return <RatingQuestion key={question.id} {...question} />
      })
    } else {
      return <div>There are no questions to display</div>
    }
  }
  render(): JSX.Element {
    return(
      <div data-automation-id='questions-list'>
        <div className={styles.heading}>
          <Link to="/rating_questions/new"><h1>Create New Question</h1></Link>
        </div>
        {this.renderRatingQuestions()}
      </div>
    )
  }
}

function mapStateToProps(state): any {
  return {questions: state.questions}
}

export default connect(mapStateToProps, { fetchQuestions })(withRouter(RatingQuestions));
