import React from 'react';
import { PropTypes as T } from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import Header from 'components/atoms/Header';
import Paragraph from 'components/atoms/Paragraph';
import UserNoteTemplate from 'templates/UserNoteTemplate';

const StyledWrapper = styled.div`
  padding: 3.5rem 10rem;
`;
const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10rem;
`;
const StyledNoteHeader = styled(Header)`
  margin: 2rem 0rem;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const GridTemplate = ({ children, noteType }) => (
  <UserNoteTemplate noteType={noteType}>
    <StyledWrapper>
      <Input search placeholder="Search" />
      <StyledNoteHeader big as="h1">
        {noteType}s
      </StyledNoteHeader>
      <Paragraph>Number of notes</Paragraph>

      <StyledGridWrapper>{children}</StyledGridWrapper>
    </StyledWrapper>
  </UserNoteTemplate>
);

GridTemplate.propTypes = {
  children: T.arrayOf(T.object).isRequired,
  noteType: T.oneOf(['web', 'dance', 'zen']),
};

GridTemplate.defaultProps = {
  noteType: 'web',
};
export default GridTemplate;
