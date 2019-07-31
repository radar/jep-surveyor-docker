import * as React from 'react'
import * as styles from './RatingQuestion.module.scss'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import RatingOption from './RatingOption'
import axios from 'axios';

interface RatingQuestionProps extends RouteComponentProps<any>, React.Props<any> {
  survey_id: string,
  response_id: string,
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
    const { survey_id, response_id, id } = this.props
    this.setState({ selectedOption: option })
    axios.post('/capture_response', {
      survey_id: survey_id,
      response_id: response_id,
      value: option,
      question_id: id
    })
  }

  renderRatingOptions = (name: string) => {
    let values = [
      { label: "Strongly Disagree", value: "1" },
      { label: "Disagree", value: "2"},
      { label: "Neutral", value: "3" },
      { label: "Agree", value: "4" },
      { label: "Strongly Agree", value: "5"},
    ]

    return values.map((value, i) => <RatingOption key={i} name={name} label={value.label} value={value.value} questionOptionSelected={this.questionOptionSelected} />)
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
