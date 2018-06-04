const API = "http://localhost:3001";

class Api {
  static getAllPosts() {
    return fetch(`${API}/posts` , { headers: { Authorization: "whatever-you-want" } }).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getSinglePost(id) {
    return fetch(`${API}/posts/${id}`, { headers: { Authorization: "whatever-you-want" } }).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getComments(postId) {
    return fetch(`${API}/posts/${postId}/comments`, { headers: { Authorization: "whatever-you-want" } }).then(response => {
      return response.json().then(data => data);
    }).catch(error => {
      return error;
    });
  }

  static getCategories = () => {
    return fetch(`${API}/categories`, { headers: { Authorization: "whatever-you-want" }}).then(response => {
      return response.json().then(data => data);
    }).catch(error => {
      return error;
    });
  }

  static addComment = (comment) => {
    const body = JSON.stringify(comment);
    return fetch(`${API}/comments/`, { method: "POST", headers: {
        Authorization: "whatever-you-want",
        "Content-Type": "application/json"
      },
      body
    }).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static voteComment = (commentId, option) => {
    return fetch(`${API}/comments/${commentId}`, { method: "POST", headers: {
        Authorization: "whatever-you-want",
        "Content-Type": "application/json"
      }, body: JSON.stringify({ option: option })
    }).then(data => data.json());
  };

  static votePost = (postId, option) => {
    return fetch(`${API}/posts/${postId}`, { method: `POST`, headers: {
      Authorization: "whatever-you-want",
      "Content-Type": "application/json"
    }, body: JSON.stringify({ option })
    }).then(data => data.json());
  };

  // static votePost = (postId, option) => {

  //   console.log('API')
  //   console.log(postId)

  //   return fetch(`${API}/posts/${postId}`, { method: `POST`, headers: {
  //     Authorization: "whatever-you-want",
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({option})
  //   })
  //   .then( response => {
  //     return response.json()
  //   }).catch(error => { return error });
  // }

}

export default Api;