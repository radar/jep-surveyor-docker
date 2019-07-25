import * as React from 'react'
import * as styles from './RatingQuestion.module.scss'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import RatingOption from './RatingOption'
import axios from 'axios';

interface RatingQuestionProps extends RouteComponentProps<any>, React.Props<any> {
  id: string,
  title: string,
  url: string,
  children?: React.ReactNode
}

interface RatingQuestionState {
  selectedOption: string
}

class RatingQuestion extends React.Component<RatingQuestionProps, RatingQuestionState> {

  state = {
    selectedOption: ''
  }

  questionOptionSelected = (option: string) => {
    axios.post('/capture_response', {
      previous_response: this.state.selectedOption,
      question_id: this.props.id,
      current_response: option,
    })
    this.setState({ selectedOption: option })
  }

  renderRatingOptions = (name: string) => {
    let values = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]

    return values.map((value, i) => <RatingOption key={i} name={name} value={value} questionOptionSelected={this.questionOptionSelected} />)
  }
  render(): JSX.Element {
    const {id, title} = this.props
    return (
      <div className={styles.ratingQuestion}>
        <Link to={`/rating_questions/${id}`}><h2>{title}</h2></Link>
        {this.renderRatingOptions(title)}
      </div>
    )
  }
}

export default RatingQuestion
