import React from 'react';
import styled from 'styled-components';

import LoadingSpinnerSvg from '../../icons/loading.svg'

const StyledLoading = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: relative;
  top: 0;
  width: 100%;
`

const Loading = () =>
  <StyledLoading>
    <img alt="" src={LoadingSpinnerSvg} />
  </StyledLoading>

export default Loading
