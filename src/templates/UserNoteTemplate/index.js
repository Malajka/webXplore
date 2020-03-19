import React from 'react';
import { PropTypes as T } from 'prop-types';
import SideBar from 'components/organisms/SideBar/';

const UserNoteTemplate = ({ children, noteType }) => (
  <>
    <SideBar noteType={noteType} />
    {children}
  </>
);

UserNoteTemplate.propTypes = {
  children: T.element.isRequired,
  noteType: T.oneOf(['web', 'dance', 'zen']),
};

UserNoteTemplate.defaultProps = {
  noteType: 'web',
};
export default UserNoteTemplate;
