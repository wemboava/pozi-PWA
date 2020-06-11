import styled from 'styled-components';

export const Container = styled.div`
  & .logo {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding-top: 20px;
    & img {
      width: 150px;
    }
    & span {
      font-family: 'Acme', sans-serif !important;
      font-size: 4em;
      font-weight: 500;
      color: #fff;
      margin-top: -10px;
    }
  }
`;

export const Content = styled.section`
  height: calc(100vh);
  max-width: 768px;

  background-color: #fff;
  border-radius: 45px 45px 0px 0px;
  padding: 30px 10px;
  margin: auto;
  margin-top: 20px;
  transition: .4s;
  @media(min-width: 768px) {
    height: auto;
    border-radius: 45px;
    padding: 40px 40px 15px 40px;
  }
  & h2 {
    color: #6D6966;
    text-align: center;
    font-size: 1.5em;
  }
`;