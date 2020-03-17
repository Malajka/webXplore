import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonIcon from 'atoms/ButtonIcon';
import Header from 'atoms/Header';
import Paragraph from 'atoms/Paragraph';



const StyledWrapper = styled.div`
 
  background-color:${({active,theme}) => active? theme.web:'white'};
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  border-radius:.5rem;
  overflow: hidden;
`;
const InnerWrapper = styled.div`
  padding: 1rem 1.5rem;
  background-color:${({theme, currentColor})=> currentColor ? theme[currentColor] : 'white'};
`

const Note=({noteType}) =>(
  <StyledWrapper >
    <InnerWrapper currentColor={noteType}>
    <Header>Title</Header>
    </InnerWrapper>
    <InnerWrapper>
    <Paragraph>main text</Paragraph>
    </InnerWrapper>
    <ButtonIcon write/>
    <ButtonIcon remove/>
  </StyledWrapper>
)
Note.propTypes = {
  noteType: PropTypes.oneOf(['web', 'dance', 'zen'])
}
Note.defaultProps = {
  noteType:'web',
}
export default Note;