import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.SECONDARY_COLOR};
`;

const IngredientContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;
`;

const Title = styled.h2`
  font: 500 14px 'Roboto';
  color: ${({ theme }) => theme.COLORS.DARK_GRAY};
`;

const Price = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_COLOR};
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  height: fit-content;
  padding: 10px 9px;

  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.COLORS.SECONDARY_COLOR};
  border-radius: 5px;
`;

const Amount = styled.p`
  color: ${({ theme }) => theme.COLORS.DARK_GRAY};
`;

const Button = styled.button`
  background-color: inherit;
  border: none;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    filter: brightness(70%);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

export { Container, IngredientContainer, Title, Price, AmountContainer, Amount, Button };
