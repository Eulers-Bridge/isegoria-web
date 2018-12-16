import React from 'react';
import { connect } from 'react-redux';

import ArticleForm from '../components/ArticleForm';
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

    // ##TODO## :: Loading state
    return (
      id
        ? <ArticleForm article={displayArticles[0] || null} />
        : displayArticles.map(article =>
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
