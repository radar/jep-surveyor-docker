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
    selectedOption: "Nothing selected"
  }

  questionOption = (option: string) => {
    this.setState({ selectedOption: option })
  }

  renderRatingOptions = (name: string) => {
    let values = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]

    return values.map((value, i) => <RatingOption key={i} name={name} value={value} questionOption={this.questionOption} />)
  }
  render(): JSX.Element {
    return (
      <div className={styles.ratingQuestion}>
        <Link to={`/rating_questions/${this.props.id}`}>{this.props.title}</Link>
        {this.renderRatingOptions(this.props.title)}
      </div>
    )
  }
}

export default RatingQuestion
