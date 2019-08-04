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
  selectedOption: string,
  surveyId: string,
  responseId: string,
}

class RatingQuestion extends React.Component<RatingQuestionProps, RatingQuestionState> {

  state = {
    selectedOption: '',
    surveyId: '1',
    responseId: '1'
  }

  changeSurveyId = (event: React.FormEvent) => {
    const surveyId = (event.target as HTMLInputElement).value
    this.setState({ surveyId })
  }

  changeResponseId = (event: React.FormEvent) => {
    const responseId = (event.target as HTMLInputElement).value
    this.setState({ responseId })
  }

  questionOptionSelected = (option: string) => {
    const { surveyId, responseId } = this.state
    this.setState({ selectedOption: option })
    axios.post('/capture_response', {
      survey_id: surveyId,
      response_id: responseId,
      value: option,
      question_id: this.props.id
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
    const {surveyId, responseId} = this.state
    return (
      <div className={styles.ratingQuestion}>
        <Link to={`/rating_questions/${id}`}><h2>{title}</h2></Link>
        <p>
          Survey Id: <input
            type="text"
            value={surveyId}
            name="surveyId"
            onChange={this.changeSurveyId}/>
          Response Id: <input
          type="text"
          value={responseId}
          name="responseId"
          onChange={this.changeResponseId}/>
        </p>
        {this.renderRatingOptions(title)}
      </div>
    )
  }
}

export default RatingQuestion
