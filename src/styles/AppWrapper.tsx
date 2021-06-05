import styled from "styled-components";

const AppWrapper = styled.div.attrs(({ className }) => ({
  className: `App AppWrapper ${className}`,
}))`
  display: block;
  border: 1px solid red;
`;

export default AppWrapper;
