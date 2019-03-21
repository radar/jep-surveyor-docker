import { FETCH_QUESTIONS, FETCH_QUESTION, SAVE_QUESTION, EDIT_QUESTION, DELETE_QUESTION, QuestionActionTypes } from '../actions/types';

const updateEditedQuestion = (questions: any, newQuestion: any) => {
  questions.map( question => {
    if(question.id === newQuestion.id){
      question.title = newQuestion.title
    }
  })
}

const updateDeleteddQuestion = (questions: any, questionId: string) => {
  return questions.filter(question => question.id !== questionId)
}

export default function(state=[], action: QuestionActionTypes) {
  switch(action.type) {
  case FETCH_QUESTIONS:
    return action.payload.data;
  case FETCH_QUESTION:
    return [...state]
  case SAVE_QUESTION:
    return [...state, action.payload.data]
  case EDIT_QUESTION:
    return updateEditedQuestion(state, action.payload.data)
  case DELETE_QUESTION:
    return updateDeleteddQuestion(state, action.payload)
  default:
    return state;
  }
}