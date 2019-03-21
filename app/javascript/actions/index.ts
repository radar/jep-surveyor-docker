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

export function fetchQuestion(questionId: string){
  return {
    type: FETCH_QUESTION,
    payload: questionId
  };
}

export function saveQuestion(value: string){
  const request = axios.post(`${ROOT_URL}.json`, { rating_question: { title: value }})

  return {
    type: SAVE_QUESTION,
    payload: request
  }
}

export function editQuestion(questionId: string, value: string){
  const request = axios.put(`${ROOT_URL}/${questionId}.json`, { rating_question: { title: value }})

  return {
    type: EDIT_QUESTION,
    payload: request
  }
}

export function deleteQuestion(questionId: string){
  const request = axios.delete(`${ROOT_URL}/${questionId}.json`)
  return {
    type: DELETE_QUESTION,
    payload: questionId
  }
}