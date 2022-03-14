import styled from 'styled-components';

const Container = styled.section`
  display: grid;
  grid-template-columns: 0.44fr 0.56fr;
  gap: 0.5rem;

  margin-top: 2rem;
`;

const AmountContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 13px;

  border: 1px solid ${({ theme }) => theme.COLORS.DARK_YELLOW};
  border-radius: 4px;
`;

const Amount = styled.p`
  font: 500 14px 'Roboto';
`;

const AmountButton = styled.button<{ amount?: number }>`
  display: grid;
  place-items: center;

  background-color: inherit;
  border: none;

  opacity: ${props => (props.amount === 1 ? 0.4 : 1)};

  cursor: ${props => (props.amount === 1 ? 'not-allowed' : 'pointer')};
  transition: 0.2s;

  &:hover {
    filter: brightness(70%);
  }
`;

const AddButton = styled.button`
  font: 500 14px 'Roboto';
  color: ${({ theme }) => theme.COLORS.WHITE};

  background-color: ${({ theme }) => theme.COLORS.SECONDARY_COLOR};
  border: none;
  border-radius: 4px;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    filter: brightness(80%);
  }
`;

export { Container, AmountContainer, Amount, AmountButton, AddButton };
