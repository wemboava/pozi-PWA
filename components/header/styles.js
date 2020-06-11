import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  & .logo {
    display: flex;
    align-items: center;
    & img {
      width: 80px;
    }
    & span {
      font-family: 'Acme', sans-serif !important;
      font-size: 35px;
      font-weight: 600;
      color: #fff;
    }
  }
`;