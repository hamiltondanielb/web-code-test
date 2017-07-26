import {
  GET_CATEGORIES_SUCCESS,
  GET_ARTICLES_BY_CATEGORY_SUCCESS,
  GET_ARTICLE_SUCCESS,
} from './constants'

const initialState = {
  categories: [],
  currentArticles: [],
  currentArticle: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.data
      }

    case GET_ARTICLES_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        currentArticles: action.payload.data
      }

    case GET_ARTICLE_SUCCESS:
      return {
        ...state,
        currentArticle: action.payload.data
      }

    default:
      return state
  }
}
