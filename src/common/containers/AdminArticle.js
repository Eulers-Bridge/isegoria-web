import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ArticleForm from '../components/ArticleForm';
import ContentItem from '../components/ContentItem';

import Fab from '@material-ui/core/Fab';

import AddIcon from '@material-ui/icons/Add';

export const StyledAddIcon = styled(AddIcon)`
  margin-right: 8px;
`;

export const StyledFab = styled(Fab)`
  && {
    bottom: 16px;
    position: fixed;
    right: 16px;
  }
`;

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
        : [
          displayArticles.map(article =>
            <ContentItem
              contentType="article"
              item={article}
              key={`c-articles-article-${article.articleId}`} />
          ),
          <StyledFab
            aria-label="Add"
            color="primary"
            onClick={
              () => window.location.href += '/create'
            }
            variant="extended"
          >
            <StyledAddIcon />
            Add Article
          </StyledFab>
        ]
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.content.article
  }
}

export default connect(mapStateToProps)(AdminArticle);
