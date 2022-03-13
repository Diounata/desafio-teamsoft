import styled from 'styled-components';

const Container = styled.section`
  margin-top: 1.5rem;
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font: 500 1.125rem 'Roboto';
  color: ${({ theme }) => theme.COLORS.DARK_GRAY};

  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin: 1rem 0;

  line-height: 1.25rem;
  color: ${({ theme }) => theme.COLORS.DARK_GRAY};
`;

const PriceContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: 0.875rem;
`;

const DiscountedPrice = styled.span`
  color: ${({ theme }) => theme.COLORS.DARK_YELLOW};
`;

const OldPrice = styled.span`
  text-decoration-line: line-through;
  color: ${({ theme }) => theme.COLORS.DARK_GRAY};
`;

export { Container, Title, Description, PriceContainer, DiscountedPrice, OldPrice };
