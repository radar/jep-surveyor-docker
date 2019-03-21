import axios from 'axios'
import { FETCH_QUESTIONS, FETCH_QUESTION, SAVE_QUESTION, EDIT_QUESTION, DELETE_QUESTION } from './types'

const ROOT_URL = '/rating_questions'

export function fetchQuestions(){
  const request = axios.get(`${ROOT_URL}.json`);

  return {
    type: FETCH_QUESTIONS,
    payload: request
  };
}
