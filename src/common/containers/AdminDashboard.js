import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import utils from '../../utils';

import ContentItem from '../components/ContentItem';
import ContentSetControls from '../components/ContentSetControls';
import Loading from '../components/Loading';

const ContentSet = styled.div`
  margin: 6rem 0;
  padding: 0;

  &:first-child {
    margin-top: 2rem;
  }
`;

class AdminDashboard extends React.Component {
  render() {
    const { CONTENT_TYPES } = utils;
    const { content } = this.props;

    if (!content || Object.keys(content).length <= 0) {
      return <Loading />;
    }

    return (
      Object.keys(CONTENT_TYPES).map(contentType =>
        <ContentSet key={`cs-${contentType}`}>
          <h2>Recent {contentType}s</h2>
          {
            content[contentType].length > 0 &&
            content[contentType].map((item, i) =>
              <ContentItem
                contentType={contentType}
                item={item}
                key={`ci-${contentType}-${i}`} />
            )
          }
          {
            !(content[contentType].length > 0) &&
              <Loading />
          }
          <ContentSetControls contentType={contentType} />
        </ContentSet>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    content: state.content
  }
}

export default connect(mapStateToProps)(AdminDashboard);
