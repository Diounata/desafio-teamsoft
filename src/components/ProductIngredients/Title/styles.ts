import styled from 'styled-components';

const Container = styled.section`
  margin-bottom: 1rem;
  padding: 8px 15px;

  background-color: ${({ theme }) => theme.COLORS.LIGHT_YELLOW};
`;

const Title = styled.h2`
  font: 500 14px 'Roboto';
  color: ${({ theme }) => theme.COLORS.DARK_GRAY};
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.h3`
  font: 400 12px 'Roboto';
  color: ${({ theme }) => theme.COLORS.DARK_YELLOW};
`;

export { Container, Title, Subtitle };
