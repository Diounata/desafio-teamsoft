import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.1rem;

  width: 23rem;
  padding: 0.5rem;
  padding-right: 1rem;

  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  border-radius: 4px;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;

  background-color: inherit;
  border: none;

  font: 400 1rem 'Roboto';
  color: ${({ theme }) => theme.COLORS.DARK_GRAY};

  outline: none;
`;

export { Container, Input };
