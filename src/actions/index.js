import Api from '../api/Api';
import * as types from './actionTypes';

export function loadPostsSuccess(posts) {
  return {
    type: types.LOAD_POSTS_SUCCESS,
    posts
  };
}

export function loadPosts() {
  return function(dispatch) {
    return Api.getPosts().then(posts => {
      dispatch(loadPostsSuccess(posts));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadPostSuccess(posts) {
  return {
    type: types.LOAD_POST_SUCCESS,
    posts
  };
}

export function loadPost(id) {
  return function(dispatch) {
    return Api.getPost(id).then(post => {
      dispatch(loadPostSuccess(post));
    }).catch(error => {
      throw(error);
    });
  };
}

export function addPostSuccess(post) {
  return {
    type: types.ADD_POST_SUCCESS,
    post
  }
};

export function addPost(post) {
  return function(dispatch) {
    Api.addPost(post).then(post => {
      dispatch(addPostSuccess(post));
    }).catch(error => {
      throw(error);
    });
  };
}

export function deletePostSuccess(postId) {
  return {
    type: types.DELETE_POST_SUCCESS,
    postId
  }
};

export function deletePost(postId) {
  return function(dispatch) {
    Api.deletePost(postId).then(post => {
      dispatch(deletePostSuccess(postId));
    }).catch(error => {
      throw(error);
    });
  };
}

export function changeSorting(sorting) {
  return {
    type: types.CHANGE_SORTING_SUCCESS,
    sorting
  }
}

export function votePostSuccess(post) {
  return {
      type: types.VOTE_POST_SUCCESS,
      post
    }
}

export function votePost(id, value) {
  return function(dispatch) {
    return Api.votePost(id, value).then(post => {
      dispatch(votePostSuccess(post));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadCategoriesSuccess(categories) {
  return  {
    type: types.LOAD_CATEGORIES_SUCCESS,
    categories
  }
};

export function loadCategories() {
  return function(dispatch) {
    return Api.getCategories().then(categories => {
      dispatch(loadCategoriesSuccess(categories));
    }).catch(error => {
      throw(error);
    });
  };
};