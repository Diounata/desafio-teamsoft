import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 30px;
  right: -90px;

  width: 13rem;
  height: fit-content;

  filter: drop-shadow(0px -1px 4px rgba(0, 0, 0, 0.25));
`;

const Polygon = styled.div`
  position: relative;
  top: 8px;

  width: 1rem;
  height: 1rem;
  margin: auto;

  transform: rotate(45deg);

  background-color: #f09035;
`;

const Title = styled.h1`
  padding: 0.5rem;

  background-color: #f09035;
  border-radius: 4px 4px 0px 0px;
  color: #fff;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  padding: 0.5rem 0.6rem;

  background-color: #f8f8f8;
  text-align: start;

  h2 {
    font: 700 14px 'Roboto Condensed';
    color: #bc2e31;
  }

  h3 {
    font: 400 14px 'Roboto Condensed';
    color: #4e4e4e;
  }

  ul {
    margin-left: 20px;

    font-family: 'Roboto Condensed';

    li {
      margin: 2px 0;

      color: #4e4e4e;
    }
  }
`;

export { Container, Polygon, Title, Body };
