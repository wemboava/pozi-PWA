import styled from 'styled-components';

export const Container = styled.div`
  .back {
    max-width: 768px;
    margin: 10px auto 0 10px;
    @media(min-width: 768px) {
      margin: 10px auto 0 auto;
    }
    button {
      background-color: transparent;
      color: #fff;
      font-size: 1.3em;
      font-weight: 600;
      & svg {
        margin-right: 10px;
      }
    }
  }
`;

export const Content = styled.section`
  min-height: 100vh;
  max-width: 768px;

  background-color: #fff;
  border-radius: 45px 45px 0px 0px;
  padding: 30px 10px;
  margin: auto;
  margin-top: 20px;
  transition: .4s;
  @media(min-width: 768px) {
    height: auto;
    min-height: auto;
    border-radius: 45px;
    padding: 40px 40px 15px 40px;
    margin-bottom: 30px;
  }
  & h2 {
    color: #6D6966;
    text-align: center;
    font-size: 1.8em;
    text-transform: capitalize;
  }
`;

export default Container;