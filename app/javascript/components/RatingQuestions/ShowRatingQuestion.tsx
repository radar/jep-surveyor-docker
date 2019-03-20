import * as React from 'react'
import * as styles from './RatingQuestion.module.scss'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import axios from 'axios';

interface RatingQuestionProps extends RouteComponentProps<any>, React.Props<any> {
  id: string,
  title: string,
  url: string,
  children?: React.ReactNode
}

interface RatingQuestionStates {
  id: string,
  title: string,
  url: string,
}

class ShowRatingQuestion extends React.Component<RatingQuestionProps, RatingQuestionStates> {
  state = {
    id: '',
    title: '',
    url: ''
  }

  componentDidMount = () => {
    axios.get(`/rating_questions/${this.props.match.params.id}.json`)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          url: response.data.url
        })
      })
  }
  renderQuestion = () => {
    return (
      <div className={styles.ratingQuestion}>
        <h1>{this.state.title}</h1>
        <Link to={`/rating_questions/${this.state.id}`} onClick={this.handleDelete}><span className={styles.button}>Delete</span></Link>
        <Link to={`/rating_questions/${this.state.id}/edit`}><span className={styles.button}>Edit</span></Link>
        <Link to="/"><span className={styles.button}>Back</span></Link>
      </div>
    )
  }
  handleDelete = () => {
    axios.delete(`/rating_questions/${this.props.match.params.id}.json`)
    .then(() =>{
      this.props.history.push('/')
    })
  }
  render(): JSX.Element {
    return this.renderQuestion()
  }
}

export default withRouter(ShowRatingQuestion)
