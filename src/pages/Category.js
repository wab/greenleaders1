import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
import ArticleList from "../components/ArticleList";
import _ from "lodash";

class Category extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    const { posts, categories, postsReady, categoriesReady } = this.props;
    const ready = postsReady && categoriesReady;
    let category = null;
    if (ready) {
      category = _.find(categories, c => c.fields.slug === this.props.match.params.rubrique) || null;
    } else {
      return null;
    }
    return (
      <div>
        <h2>{category ? category.fields.title : null}</h2>
        <ArticleList posts={posts} />
      </div>
    );
  }
}

// Maps state from store to props
function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts.all,
    categories: state.categories.all,
    postsReady: state.posts.ready,
    categoriesReady: state.categories.ready
  };
}

export default withRouter(connect(mapStateToProps, { fetchPosts })(Category));
