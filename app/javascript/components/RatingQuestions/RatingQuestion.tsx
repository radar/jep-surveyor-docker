import * as React from 'react'
import * as styles from './RatingQuestion.module.scss'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import axios from 'axios';

interface RatingQuestionProps{
  id: string,
  title: string,
  url: string
}

class RatingQuestion extends React.Component<RatingQuestionProps> {
  render(): JSX.Element {
    return (
      <div className={styles.ratingQuestion}>
        <Link to={`/rating_questions/${this.props.id}`}>{this.props.title}</Link>
      </div>
    )
  }
}

export default RatingQuestion 
