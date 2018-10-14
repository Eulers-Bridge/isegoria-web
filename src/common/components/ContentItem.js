import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import utils from '../../utils';

const StyledContentItem = styled.div`
  align-items: center;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  /* justify-content: space-between; */
  margin: 1rem;
  padding-bottom: 1rem;
  /* width: 100%; */

  &:last-of-type {
    border-bottom: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const ContentItemImage = styled.div`
  max-width: 240px;
  padding: 1rem;

  img {
    border-radius: 12px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    width: 100%;
  }
`;

const ContentItemDetail = styled.div`
  h4 {
    margin-bottom: 0.25rem;
  }

  em {
    color: #aaa;
    display: block;
    font-style: normal;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

const StyledCreator = styled.strong`
  color: #aaa;
  font-size: 1rem;
  font-weight: bold;

  a {
    color: #666;
  }
`;

const ContentItem = props => {
  const { contentType, item } = props
  const {
    creatorEmail,
    creatorProfile = {},
    photos = []
  } = item
  const { givenName, familyName } = creatorProfile

  // ##TODON'T##
  const singularContentType = `${contentType}`.replace(/s$/gi, '').toLowerCase()
  const idField = item[`${singularContentType}Id`]
    ? `${singularContentType}Id`
    : 'nodeId'
  const itemLink = `/admin/${contentType}/${item[idField]}`

  const creatorName = givenName && familyName
    ? `${givenName} ${familyName}`
    : givenName
      ? `${givenName}`
      : ``;

  // ##TODO## :: Ditch plural
  // ##TODO## :: Clean up, generally
  const photoObject = contentType === 'photos'
    ? item
    : photos[0]
      ? photos[0]
      // ##TODO## :: Default / placeholder
      : {}

  const previewPhoto = photoObject.url
  const previewAlt = photoObject.description

  return (
    <StyledContentItem>
      {
        previewPhoto &&
          <ContentItemImage>
            <Link to={itemLink}>
              <img
                alt={previewAlt}
                src={previewPhoto} />
            </Link>
          </ContentItemImage>
      }
      <ContentItemDetail>
        <h4>
          <Link to={itemLink}>
            {item.title || item.name}
          </Link>
        </h4>
        <em>{utils.formatDate(item.date || item.created)}</em>
        {
          item.content &&
            <p>{utils.truncate(item.content, 120)}</p>
        }
        {
          creatorName &&
            <StyledCreator>Added by <a href={`mailto:${creatorEmail}`}>{creatorName}</a></StyledCreator>
        }
      </ContentItemDetail>
    </StyledContentItem>
  )
}

export default ContentItem;
