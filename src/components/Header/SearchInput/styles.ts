import styled from 'styled-components';

const Container = styled.section`
  width: 22rem;
  padding: 0.5rem;

  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  border-radius: 4px;
`;

const Input = styled.input`
  padding: 0.5rem;

  background-color: inherit;
  border: none;

  font: 400 1rem 'Roboto';
  color: ${({ theme }) => theme.COLORS.DARK_GRAY};

  outline: none;
`;

export { Container, Input };
