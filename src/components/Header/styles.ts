import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  align-items: center;

  padding: 0.75rem 1rem;

  background-color: #f4f4f4;

  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
`;

const LogoContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export { Container, LogoContainer };
