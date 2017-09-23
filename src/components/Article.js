import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import marked from 'marked';
import { fetchPost, fetchPosts } from '../actions/index';
import Asset from '../components/Asset';

class Article extends Component {
  componentWillMount() {
    this.props.fetchPosts(null, this.props.match.params.postId);
  }
  renderMarkdown = (content) => {
    return {
      __html: marked(content, {sanitize: true})
    }
  }
  renderPost() {
    const {posts} = this.props;
    const article = posts[0] || null;

    if(!article) {
      return 'not found';
    }
    return (
      <article key={article.sys.id}>
        <h1>{article.fields.title}</h1>
        <Asset assetId={article.fields.image.sys.id} />
        <div dangerouslySetInnerHTML={this.renderMarkdown(article.fields.content)} />
      </article>
    );
  }
  render() {
    const {ready} = this.props;
    return (
      <div>{ready ? this.renderPost() : 'loading...'}</div>
    );
  }
}

// Maps state from store to props
function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts.all,
    ready: state.posts.ready
  };
}

export default withRouter(connect(mapStateToProps, { fetchPost, fetchPosts })(Article))
