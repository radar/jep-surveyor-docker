import * as React from 'react'
import * as styles from './RatingQuestion.module.scss'
import axios from 'axios';

interface RatingQuestionProps {
  id: string,
  title: string,
  url: string,
}

class RatingQuestion extends React.Component<RatingQuestionProps> {
  handleDelete = () => {
    axios.delete(this.props.url)
  }
  render() {
    return (
      <div className={styles.ratingQuestion}>
        <a href={this.props.url}>{this.props.title}</a> |
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default RatingQuestion
