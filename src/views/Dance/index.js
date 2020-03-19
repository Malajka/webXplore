import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Note from 'components/molecules/Note';

const Dance = () => (
  <GridTemplate noteType="dance">
    <Note noteType="dance" />
    <Note noteType="dance" />
    <Note noteType="dance" />
    <Note noteType="dance" />
  </GridTemplate>
);

export default Dance;
