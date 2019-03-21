import _ from 'lodash';
import { FETCH_QUESTIONS, FETCH_QUESTION, SAVE_QUESTION, EDIT_QUESTION, DELETE_QUESTION, QuestionActionTypes } from '../actions/types';

export default function(state={}, action: QuestionActionTypes) {
  switch(action.type) {
  case FETCH_QUESTIONS:
    return action.payload.data;
  default:
    return state;
  }
}