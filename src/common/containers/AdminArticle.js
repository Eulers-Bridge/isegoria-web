import React from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';

import ContentItem from '../components/ContentItem';

class AdminArticle extends React.Component {
  render() {
    const {
      articles,
      match: { params }
    } = this.props;
    const { id } = params;
    const displayArticles = id
      ? articles.filter(article => `${article.articleId}` === id)
      : articles;

    return (
      displayArticles.map(article =>
        <ContentItem
          contentType="article"
          item={article}
          key={`c-articles-article-${article.articleId}`} />
      )
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.content.article
  }
}

export default connect(mapStateToProps)(AdminArticle);
