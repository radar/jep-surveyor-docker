import * as React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

interface RatingQuestionProps {
  id: string,
  title: string
}

interface QuestionFormState {
    value: string,
    flash: string
}

class RatingQuestionForm extends React.Component<RatingQuestionProps, QuestionFormState> {
    state = {
        value: this.props.title || '',
        flash: ''
    }

    handleChange = (e: React.FormEvent) => {
        this.setState({ value: (e.target as HTMLInputElement).value })
    }

    submitNewQuestion = () => {
      axios.post("/rating_questions.json", { rating_question: { title: this.state.value }})
        .then((response) => {
          this.setState({
            value: '',
            flash: 'Question created successfully'
          })
        })
    }

    updateQuestion = () => {
      axios.put(`/rating_questions/${this.props.id}.json`, { rating_question: { title: this.state.value }})
        .then((response) => {
          this.setState({
            value: '',
            flash: 'Question updated successfully'
          })
        })
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        this.props.title ? this.updateQuestion() : this.submitNewQuestion()
    }

    renderForm = () => {
      console.log(this.props)
        return(
            <div>
                <h1>{this.state.flash ? this.state.flash : ""}
                </h1>
                <form onSubmit={this.handleSubmit}>
                    Title: <br/>
                    <textarea onChange={this.handleChange} name="title" value={this.state.value}/><br/>
                    <button type="submit" value="Submit">
                      { this.props.title ? 'Update Question' : 'Add Question'}
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

export default RatingQuestionForm;