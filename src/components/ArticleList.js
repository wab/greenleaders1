import React, { Component } from 'react';
import _ from 'lodash';

class ArticleList extends Component {
  render() {
    const {posts} = this.props;
    return (
      <ol>
        {_.map(posts, article => (
          <li key={article.sys.id}>{article.fields.title}</li>
        ))}
      </ol>
    );
  }
}

export default ArticleList;
