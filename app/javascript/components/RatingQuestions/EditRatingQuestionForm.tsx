import * as React from 'react';
import * as styles from './RatingQuestionForm.module.scss'
import axios from 'axios';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { editQuestion, fetchQuestion } from '../../actions';

interface EditRatingQuestionFormProps extends RouteComponentProps<any>, React.Props<any> {
  editQuestion: (questionId: string, value: string) => void,
  fetchQuestion: (questionId: string) => void,
  questions: any,
}

interface EditRatingQuestionFormState {
    value: string,
    editMessage: string,
}

class EditRatingQuestionForm extends React.Component<EditRatingQuestionFormProps, EditRatingQuestionFormState> {
    state = {
        value: '',
        editMessage: '',
    }

    singleQuestion = (questions: any, questionId: string) => {
      let question = questions.filter(question => question.id === questionId)
      return question[0]
    }

    componentDidMount = () => {
      const { questions } = this.props;
      const questionId = this.props.match.params.id;
      this.props.fetchQuestion(questionId);
      this.setState({
        value: this.singleQuestion(questions, questionId).title
      })
    }

    handleChange = (e: React.FormEvent) => {
        this.setState({ value: (e.target as HTMLInputElement).value })
    }

    submitNewQuestion = () => {
      const questionId = this.props.match.params.id;
      this.props.editQuestion(questionId, this.state.value);
      this.setState({
        editMessage: 'Title edited sucessfully! click Back to go back!'
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
                    {this.state.editMessage? <h3>{this.state.editMessage}</h3> : ''}
                    <button className={[styles.button, styles.cancelButton].join(' ')}><Link to="/">Cancel</Link></button>
                    { this.state.editMessage?
                      <button className={[styles.button, styles.cancelButton].join(' ')}><Link to="/">Back</Link></button>
                      :
                      <button 
                        className={styles.button} 
                        type="submit" value="Submit">
                        Update Question
                      </button>
                    }
                    
                </form>
            </div>
        )
    }

    render() {
        return(
            <div>
                { this.renderForm() }
            </div>
            
        )
    }
}

function mapStateToProps(state): any {
  return {questions: state.questions}
}

export default connect(mapStateToProps, { editQuestion, fetchQuestion })(withRouter(EditRatingQuestionForm))