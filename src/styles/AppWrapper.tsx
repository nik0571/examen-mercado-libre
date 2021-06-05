import styled from "styled-components";

const AppWrapper = styled.div.attrs(({ className }) => ({
  className: `app-wrapper ${className}`,
}))``;

const MainHeaderWrapper = styled.header.attrs(() => ({
  className: 'main-header-wrapper',
}))``;

const MainBodyWrapper = styled.div.attrs(() => ({
  className: 'main-body-wrapper',
}))``;

export default AppWrapper;
export { MainHeaderWrapper, MainBodyWrapper };
