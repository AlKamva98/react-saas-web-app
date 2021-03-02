/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuestions = /* GraphQL */ `
  query GetQuestions($id: ID!) {
    getQuestions(id: $id) {
      id
      mainquest
      questa
      questb
      questc
      questd
      createdAt
      updatedAt
    }
  }
`;
export const listQuestionss = /* GraphQL */ `
  query ListQuestionss(
    $filter: ModelQuestionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        mainquest
        questa
        questb
        questc
        questd
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
