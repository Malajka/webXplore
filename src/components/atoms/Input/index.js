import styled, { css } from 'styled-components';
import searchLoop from 'assets/search.svg';

const Input = styled.input`
  padding: 2rem;

  background-color: ${({ theme }) => theme.dance};

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 0.5rem;
  }

  ${({ search }) =>
    search &&
    css`
      background-image: url(${searchLoop});
      background-size: 2.5rem;
      background-repeat: no-repeat;
      background-position: 2% 50%;
    `}
`;
export default Input;

// font-size: ${({theme}) => theme.fontSize.s};
