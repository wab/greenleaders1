import React, {Component}  from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchPosts } from '../actions/index';

class Home extends Component {
  componentWillMount() {
    this.props.fetchPosts();

  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <ul>
          {this.props.posts.map((post, i) => <li key={i}>{post.fields.title}</li> )}
        </ul>
      </div>
    );
  }
}

// Maps state from store to props
function mapStateToProps(state, ownProps) {
  return { posts: state.posts.all };
}

export default withRouter(connect(mapStateToProps, { fetchPosts })(Home))