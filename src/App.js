import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import MainPage from './components/main_page'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        {/* <Route exact path="/addPost" component={AddPost} />
        <Route exact path="/:category/" component={ShowCategoryPosts} />
        <Route exact path="/editPost/:postId" component={EditPost} />
        <Route exact path="/editComment/:commentId" component={EditComment} /> */}
        {/* <Route exact path="/:category/:post_id" component={PostDetail} /> */}
      </Switch>
    );
  }
}

export default App;
