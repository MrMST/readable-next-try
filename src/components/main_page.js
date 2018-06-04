import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPosts, changeSorting, votePost } from '../actions'
import Timestamp from 'react-timestamp'
import { Link } from 'react-router-dom'

class MainPage extends Component {

componentDidMount() {
  this.props.loadPosts();
}

changeSorting = ( sorting ) => {
  this.props.changeSorting({ sorting });
}

votePost = (id, value) => {
  this.props.votePost(id, value);
}

render() {
  const {posts} = this.props.posts
  const {sorting} = this.props.sorting

  return(
      <div className='post-list-wrapper'>
        <button onClick={ () => this.changeSorting('votescore') }>VoteScore</button>
        <button onClick={ () => this.changeSorting('timestamp') }>Timestamp</button>
        {/* <Link to="/addpost"><button>Add Post</button></Link> */}
        <ul>
          { posts && posts.length > 0 &&
            posts.filter(post => !post.deleted)
            .sort(( a, b ) => {
              switch ( sorting ) {
                case "timestamp":
                  return b.timestamp - a.timestamp;
                default:
                  return b.voteScore - a.voteScore;
              }
            })
            .map( post => (
            <li key = { post.id }>
              <div className='post-wrapper'>
                <div>Category: { post.category }</div>
                <div>Title: <Link to={`/show/${post.id}`}>{ post.title }</Link></div>
                <div><Timestamp time={ post.timestamp / 1000 } format='full' /></div>
                <div>Author: { post.author }</div>
                <div>Comments: { post.commentCount }</div>
                <div>
                  <button onClick={ () => this.votePost( post.id, 'upVote' ) }>Up</button>
                  CurrentScore: { post.voteScore }
                  <button onClick={ () => this.votePost( post.id, 'downVote' ) }>Down</button>
                </div>
                {/* <div><button onClick={ () => this.deletePost( post.id ) }>Remove Post</button></div> */}
                {/* <div><Link to={`/editpost/${post.id}`}><button>Edit Post</button></Link></div> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
  );
}

}

const mapStateToProps = ({posts, sorting}) => ({
  posts, sorting
})

export default connect(mapStateToProps, {loadPosts, changeSorting, votePost})(MainPage)