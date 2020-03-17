import React from 'react';
import {Link} from 'react-router-dom';
// import styled from 'styled-components';
import ButtonIcon from 'atoms/ButtonIcon';

const SideBar = () => (
<>
<ButtonIcon as ={Link} to ="/" write/>
<ButtonIcon as ={Link} to ="/dance" remove/>
<ButtonIcon as ={Link} to="/zen" add/>
</>

)
export default SideBar;