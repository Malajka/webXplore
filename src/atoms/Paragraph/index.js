import styled from 'styled-components';

const Paragraph = styled.h2`
font-size:1em;

font-weight:${({theme}) => theme.light};
color:${({theme})=>theme.zen}
`

export default Paragraph;