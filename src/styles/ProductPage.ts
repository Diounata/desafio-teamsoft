import styled from 'styled-components';

const Container = styled.main`
  flex: 1;

  margin: 1rem;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: auto 440px;
    gap: 7rem;

    margin: 1.5rem 4.125rem;
  }
`;

const IngredientsContainer = styled.section`
  @media (min-width: 1024px) {
    padding: 2rem;

    border: 1px solid #686868;
    border-radius: 8px;
  }
`;

const ProductImageContainer = styled.div`
  text-align: center;

  @media (min-width: 1024px) {
    margin-top: 1.5rem;
  }
`;

export { Container, IngredientsContainer, ProductImageContainer };
