import * as React from 'react';
import axios from 'axios';
import * as styles from './RatingQuestionForm.module.scss'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { saveQuestion } from '../../actions';

interface NewRatingQuestionFormProps extends RouteComponentProps<any>, React.Props<any> {
  saveQuestion: (values: string) => void,
  id: string,
  title: string,
  url: string,
  children?: React.ReactNode
}

interface NewRatingQuestionFormState {
    value: string
}

class NewRatingQuestionForm extends React.Component<NewRatingQuestionFormProps, NewRatingQuestionFormState> {
    state = {
        value: ''
    }

    handleChange = (e: React.FormEvent) => {
        this.setState({ value: (e.target as HTMLInputElement).value })
    }

    submitNewQuestion = () => {
        this.props.saveQuestion(this.state.value);
        this.props.history.push('/');
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        this.submitNewQuestion()
    }

    renderForm = () => {
        return(
            <div className={styles.newQuestionForm}>
                <form onSubmit={this.handleSubmit}>
                    <h3>Title:</h3>
                    <textarea className={styles.field} onChange={this.handleChange} name="title" value={this.state.value}/><br/>
                    <button className={[styles.button, styles.cancelButton].join(' ')}><Link to="/">Cancel</Link></button>
                    <button className={styles.button} type="submit" value="Submit">
                      Add New Question
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

export default connect(null, { saveQuestion })(withRouter(NewRatingQuestionForm))
  
