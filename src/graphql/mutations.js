/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      title
      question
      checks
      createdAt
      updatedAt
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      title
      question
      checks
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      title
      question
      checks
      createdAt
      updatedAt
    }
  }
`;
export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
      id
      question
      score
      reason
      improvement
      createdAt
      updatedAt
    }
  }
`;
export const updateAnswer = /* GraphQL */ `
  mutation UpdateAnswer(
    $input: UpdateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    updateAnswer(input: $input, condition: $condition) {
      id
      question
      score
      reason
      improvement
      createdAt
      updatedAt
    }
  }
`;
export const deleteAnswer = /* GraphQL */ `
  mutation DeleteAnswer(
    $input: DeleteAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    deleteAnswer(input: $input, condition: $condition) {
      id
      question
      score
      reason
      improvement
      createdAt
      updatedAt
    }
  }
`;
export const createAnswers = /* GraphQL */ `
  mutation CreateAnswers(
    $input: CreateAnswersInput!
    $condition: ModelAnswersConditionInput
  ) {
    createAnswers(input: $input, condition: $condition) {
      id
      answers
      colleague
      team
      createdAt
      updatedAt
    }
  }
`;
export const updateAnswers = /* GraphQL */ `
  mutation UpdateAnswers(
    $input: UpdateAnswersInput!
    $condition: ModelAnswersConditionInput
  ) {
    updateAnswers(input: $input, condition: $condition) {
      id
      answers
      colleague
      team
      createdAt
      updatedAt
    }
  }
`;
export const deleteAnswers = /* GraphQL */ `
  mutation DeleteAnswers(
    $input: DeleteAnswersInput!
    $condition: ModelAnswersConditionInput
  ) {
    deleteAnswers(input: $input, condition: $condition) {
      id
      answers
      colleague
      team
      createdAt
      updatedAt
    }
  }
`;
