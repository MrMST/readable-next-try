import { combineReducers } from 'redux'
import * as types from '../actions/actionTypes'


function posts(state = { posts: [] }, action) {
  switch(action.type) {

    case types.LOAD_POSTS_SUCCESS:
      return {
          ...state,
          posts: action.posts
        };

      case types.LOAD_POST_SUCCESS:
      return [action.posts];

    default:
      return state;

    case types.VOTE_POST_SUCCESS:
      console.log('action.voteScore')
      console.log(action.post.voteScore)
      const refreshedPosts = state.posts.map(entry => {
        if (entry.id === action.post.id) {
          entry.voteScore = action.post.voteScore;
        }
        return entry;
      });
      return {
        ...state,
        postsSSS: refreshedPosts
      };
  }
}

function sorting(state = { sorting: 'timestamp' }, action) {
  switch (action.type) {

    case types.CHANGE_SORTING_SUCCESS:
      return {
        ...state,
        sorting: action.value
      };
      default:
        return state;
    }
}

export default combineReducers({
    posts,
    sorting
})