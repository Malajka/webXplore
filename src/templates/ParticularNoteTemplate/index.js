import React from 'react';
// import {Link} from 'react-router-dom';
import { PropTypes as T } from 'prop-types';
// import styled from 'styled-components';
import UserNoteTemplate from 'templates/UserNoteTemplate';

const ParticularNoteTemplate = ({ children }) => <UserNoteTemplate>{children}</UserNoteTemplate>;

ParticularNoteTemplate.propTypes = {
  children: T.element.isRequired,
};
export default ParticularNoteTemplate;
