import axios from 'axios'

import {
  GET_CATEGORIES,
  GET_ARTICLES_BY_CATEGORY,
  GET_ARTICLE,
  SUBMIT_SUGGESTON
} from './constants'

export function getCategories () {
  return {
    type: GET_CATEGORIES,
    payload: axios.get('http://localhost:3000/api/categories'),
  }
}

export function getArticlesByCategory (categoryId) {
  return {
    type: GET_ARTICLES_BY_CATEGORY,
    payload: axios.get(`http://localhost:3000/api/categories/${categoryId}/articles`),
  }
}

export function getArticle (articleId) {
  return {
    type: GET_ARTICLE,
    payload: axios.get(`http://localhost:3000/api/articles/${articleId}`),
  }
}

export function submitSuggestion (data) {
  return {
    type: SUBMIT_SUGGESTON,
    payload: axios.post('http://localhost:3000/api/suggestions',data)
  }
}
