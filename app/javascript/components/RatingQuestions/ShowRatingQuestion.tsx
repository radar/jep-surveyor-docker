import * as React from 'react'
import * as styles from './RatingQuestion.module.scss'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchQuestion, deleteQuestion } from '../../actions';
import axios from 'axios';
interface RatingQuestionProps extends RouteComponentProps<any>, React.Props<any> {
  fetchQuestion: (questionId: string) => void,
  deleteQuestion: (questionId: string) => void,
  questions: any,
}

interface RatingQuestionStates {
  id: string,
  title: string,
  url: string,
  deleteMessage: string,
}

class ShowRatingQuestion extends React.Component<RatingQuestionProps, RatingQuestionStates> {
  state = {
    id: '',
    title: '',
    url: '',
    deleteMessage: ''
  }

  singleQuestion = (questions: any, questionId: string) => {
    let question = questions.filter(question => question.id === questionId)
    return question[0]
  }

  componentDidMount = () => {
    const { questions } = this.props;
    const questionId = this.props.match.params.id;
    this.props.fetchQuestion(questionId);
    const question = this.singleQuestion(questions, questionId);
    this.setState({
      id: question.id,
      title: question.title,
      url: question.url,
    })
  }
  renderQuestion = () => {
    return (
      <div className={styles.ratingQuestion}>
        <h1>{this.state.title}</h1>
        {this.state.deleteMessage? <h5>{this.state.deleteMessage}</h5> : ''}
        <Link to={`/rating_questions/${this.state.id}`} onClick={this.handleDelete}><span className={styles.button}>Delete</span></Link>
        <Link to={`/rating_questions/${this.state.id}/edit`}><span className={styles.button}>Edit</span></Link>
        <Link to="/"><span className={styles.button}>Back</span></Link>
      </div>
    )
  }
  handleDelete = () => {
    this.props.deleteQuestion(this.state.id)
    this.setState({
      deleteMessage: "Question deleted successfully! Click Back to go back!"
    })
  }
  render(): JSX.Element {
    return this.renderQuestion()
  }
}

function mapStateToProps(state): any {
  return {questions: state.questions}
}

export default connect(mapStateToProps, { fetchQuestion, deleteQuestion })(withRouter(ShowRatingQuestion))