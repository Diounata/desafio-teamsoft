import styled from 'styled-components';

const Container = styled.section`
  margin-top: 1.5rem;
  margin-bottom: 32px;

  @media (min-width: 1024px) {
    h1 {
      font-size: 1.75rem;
      margin: 2rem 0;
    }

    p {
      font-size: 1.1rem;

      margin: 2rem 0;
    }

    span {
      font-size: 1.8rem;

      &:first-child {
        color: #dc6e05;
      }
    }
  }
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
