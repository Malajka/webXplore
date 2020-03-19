import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';
import GlobalStyle from 'theme/GlobalStyle';

const MainTemplate = ({ children }) => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </div>
);
export default MainTemplate;

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

// MainTemplate.defaultProps = {
//   noteType:'web',
// }
/* <header className="App-header">
      <Input search/>
      <Button >CANCEL</Button>
      <Button success>EDIT</Button>
      <ButtonIcon>EDIT</ButtonIcon>
      <ButtonIcon add>EDIT</ButtonIcon>
      <ButtonIcon write active>EDIT</ButtonIcon>
      <ButtonIcon remove>EDIT</ButtonIcon>
      <ButtonIcon close active>EDIT</ButtonIcon>
      <Note red/>

    </header> */
