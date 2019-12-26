import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => (props.error ? 'var(--blue-600)' : '#7159c1')};
  font-family: 'Arial, Helvetica';

  small {
    font-size: 14px;
    color: #000;
  }
`;
