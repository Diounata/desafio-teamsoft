import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductImageContainer = styled.div`
  text-align: center;
`;

const ProductContainer = styled.main`
  flex: 1;

  margin: 1rem;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export { Container, ProductImageContainer, ProductContainer };
