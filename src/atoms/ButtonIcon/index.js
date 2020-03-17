import styled, { css } from 'styled-components';
import addIcon from 'assets/add.svg';
import writeIcon from 'assets/write.svg';
import closeIcon from 'assets/close.svg';
import removeIcon from 'assets/remove.svg';

const ButtonIcon = styled.button`
  /* width: 2rem;
  height: 2rem; */
  border-radius: 0.1rem;
  background-color: ${({ active, theme }) => (active ? theme.web : theme.dance)};
  padding: 2rem 3rem;
  font-family: 'Baloo Da 2', cursive;
  background-size: 2.5rem;
  background-repeat: no-repeat;
  background-position:  50%;

  ${({ write }) =>
    write &&
    css`
      background-image: url(${writeIcon});
    `}
  ${({ add }) =>
    add &&
    css`
      background-image: url(${addIcon});
    `}
   ${({ close }) =>
     close &&
     css`
       background-image: url(${closeIcon});
     `} 
   ${({ remove }) =>
     remove &&
     css`
       background-image: url(${removeIcon});
     `}
`;
export default ButtonIcon;
