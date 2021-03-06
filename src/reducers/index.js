import { combineReducers } from 'redux'
import * as types from '../actions/actionTypes'


function posts(state = { posts: [] }, action) {
  switch(action.type) {

    case types.LOAD_POSTS_SUCCESS:
      return {
          ...state,
          posts: action.posts
        }

    case types.LOAD_POST_SUCCESS:
      return [action.posts]

    case types.DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter(entry => entry.id !== action.postId)
      }

    case types.VOTE_POST_SUCCESS:

      console.log('state ')
      console.log(state)

      const posts = state.posts.map(entry => {
        if (entry.id === action.post.id) {
          entry.voteScore = action.post.voteScore
        }
        return entry;
      })
      return {
        ...state,
        posts: posts
      }

      default:
        return state
  }
}

function comments(state = {}, action) {
  switch (action.type) {

    case types.ADD_COMMENT_SUCCESS:
      return state.concat(action.comment)

    case types.LOAD_COMMENTS_SUCCESS:
      return action.comments

    case types.DELETE_COMMENT_SUCCESS:
      return state.filter(entry => entry.id !== action.commentId)

    default:
      return state
  }
}

function categories(state = {}, action) {
  switch (action.type) {

    case types.LOAD_CATEGORIES_SUCCESS:
      return action.categories

    default:
      return state
  }
}

function sorting(state = { sorting: 'timestamp' }, action) {
  switch (action.type) {

    case types.CHANGE_SORTING_SUCCESS:
      return {
        ...state,
        sorting: action.sorting.sorting
      }

      default:
        return state
    }
}

export default combineReducers({
    posts,
    categories,
    comments,
    sorting
})