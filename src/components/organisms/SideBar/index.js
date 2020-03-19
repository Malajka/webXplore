import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon';
import addIcon from 'assets/add.svg';
import writeIcon from 'assets/write.svg';
// import closeIcon from 'assets/close.svg';
import removeIcon from 'assets/remove.svg';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 12rem;
  padding: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.web)};
`;

const SideBar = ({ noteType }) => (
  <StyledWrapper activeColor={noteType}>
    <ButtonIcon as={NavLink} to="/web" icon={addIcon} activeclass="active" />
    <ButtonIcon as={NavLink} to="/dance" icon={writeIcon} activeclass="active" />
    <ButtonIcon as={NavLink} to="/zen" icon={removeIcon} activeclass="active" />
  </StyledWrapper>
);
export default SideBar;
/* background-color: ${({activeColor,theme})=>(activeColor? theme[activeColor):theme.web)}; */

SideBar.propTypes = {
  noteType: PropTypes.string.isRequired,
};
