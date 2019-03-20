import * as React from 'react';
import * as styles from './RatingQuestionForm.module.scss'
import axios from 'axios';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'

interface EditRatingQuestionFormProps extends RouteComponentProps<any>, React.Props<any> {
  id: string,
  title: string,
  url: string,
  children?: React.ReactNode
}

interface EditRatingQuestionFormState {
    value: string
}

class EditRatingQuestionForm extends React.Component<EditRatingQuestionFormProps, EditRatingQuestionFormState> {
    state = {
        value: ''
    }

    componentDidMount = () => {
      axios.get(`/rating_questions/${this.props.match.params.id}.json`)
      .then(response => {
        this.setState({
          value: response.data.title
        })
      })
    }

    handleChange = (e: React.FormEvent) => {
        this.setState({ value: (e.target as HTMLInputElement).value })
    }

    submitNewQuestion = () => {
      axios.put(`/rating_questions/${this.props.match.params.id}.json`, { rating_question: { title: this.state.value }})
        .then((response) => {
          this.setState({
            value: ''
          })
          this.props.history.push('/')
        })
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        this.submitNewQuestion()
    }

    renderForm = () => {
        return(
            <div className={styles.editQuestionForm}>
                <form onSubmit={this.handleSubmit}>
                    <h3>Title:</h3>
                    <textarea className={[styles.field, styles.editField].join(' ')} onChange={this.handleChange} name="title" value={this.state.value}/><br/>
                    <button className={[styles.button, styles.cancelButton].join(' ')}><Link to="/">Cancel</Link></button>
                    <button className={styles.button} type="submit" value="Submit">
                      Update Question
                    </button>
                </form>
            </div>
        )
    }

    render(): JSX.Element {
        return(
            <div>
                { this.renderForm() }
            </div>
            
        )
    }
}

export default withRouter(EditRatingQuestionForm);