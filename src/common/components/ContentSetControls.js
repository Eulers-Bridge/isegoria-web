import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import IconList from '../../icons/bullet-list.svg'
import IconPlus from '../../icons/button-plus.svg'

const StyledContentSetControls = styled.ul`
  align-items: space-around;
  border: 1px solid #eee;
  border-radius: 12px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
  margin: 1rem auto 3rem auto;
  max-width: 320px;
  padding: 1rem;
`;

const ContentSetControl = styled.li`
  img {
    color: #666;
    fill: #666;
    display: inline-block;
    margin: 0 0.5rem 0 0;
    height: 1rem;
    line-height: 1rem;
    vertical-align: middle;
  }
  a {
    color: #666;
    font-weight: normal;
    line-height: 1rem;
    vertical-align: middle;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContentSetControls = ({contentType}) => {
  return (
    <StyledContentSetControls>
      <ContentSetControl>
        <img alt="" src={IconList} />
        <Link to={`/admin/${contentType}`}>View all</Link>
      </ContentSetControl>

      <ContentSetControl>
        <img alt="" src={IconPlus} />
        <Link to={`/admin/${contentType}/create`}>Add</Link>
      </ContentSetControl>
    </StyledContentSetControls>
  )
}

export default ContentSetControls;
