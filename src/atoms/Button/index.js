import styled, { css } from 'styled-components';

const Button = styled.button`
    padding: 1.5rem 3rem;
    font-family: 'Baloo Da 2', cursive;
    text-transform:uppercase;
    /* background-color: ${({ success }) => (success ? 'green' : 'red')}; */
    background-color:${({theme}) => theme.web};
    border:1px solid black;
    min-width: ${({width}) => width || '5rem'};

${({ success }) =>
  success && css`
      background-color: ${({theme}) => theme.pink};;
  `};
`;

export default Button;
