import React from 'react';
import { PropTypes as T } from 'prop-types';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon';
import Header from 'components/atoms/Header';
import Paragraph from 'components/atoms/Paragraph';

const StyledWrapper = styled.div`
  background-color: ${({ active, theme }) => (active ? theme.web : 'white')};
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 0.5rem;
  overflow: hidden;
`;
const InnerWrapper = styled.div`
  padding: 1rem 1.5rem;
  background-color: ${({ theme, currentColor }) => (currentColor ? theme[currentColor] : 'white')};
`;
const Date = styled.div`
  color: 'gray';
`;
const StyledLink = styled.a`
  color: 'pink';
`;
const Note = ({ noteType, title, date, link, content }) => (
  <StyledWrapper>
    <InnerWrapper currentColor={noteType}>
      <Header>{title}</Header>
      <Date>{date}</Date>
    </InnerWrapper>
    <InnerWrapper>
      <Paragraph>{content}</Paragraph>
      <StyledLink>{link}</StyledLink>
    </InnerWrapper>
    <ButtonIcon write />
    <ButtonIcon remove />
  </StyledWrapper>
);
Note.propTypes = {
  noteType: T.oneOf(['web', 'dance', 'zen']),
  title: T.string.isRequired,
  date: T.string.isRequired,
  link: T.string,
  content: T.string.isRequired,
};
Note.defaultProps = {
  noteType: 'web',
  link: null,
};
export default Note;
