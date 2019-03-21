export const FETCH_QUESTIONS = 'fetch_questions';
export const SAVE_QUESTION = 'save_question';
export const FETCH_QUESTION = 'fetch_question';
export const DELETE_QUESTION = 'delete_question';
export const EDIT_QUESTION = 'edit_question';

interface Question {
  id: string,
  title: string,
  url: string
}

interface Data {
  data: any
}

interface FetchQuestionsAction {
  type: typeof FETCH_QUESTIONS
  payload: Data
}

interface SaveQuestionAction {
  type: typeof SAVE_QUESTION
  payload: Question
}

interface FetchQuestionAction {
  type: typeof FETCH_QUESTION
  payload: Question
}

interface EditQuestionAction {
  type: typeof EDIT_QUESTION
  payload: Question
}

interface DeleteQuestionAction {
  type: typeof DELETE_QUESTION
  payload: Question
}

export type QuestionActionTypes = FetchQuestionsAction | SaveQuestionAction | FetchQuestionAction | EditQuestionAction | DeleteQuestionAction

