import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: space-between;

  width: 14rem;
  padding: 0.5rem;

  background-color: #ffffff;
  border-radius: 4px;

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
`;

const Title = styled.h1`
  font: 400 1rem 'Roboto';
  color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
`;

const ClientAddress = styled.p`
  font: 700 0.875rem 'Roboto';
  color: ${({ theme }) => theme.COLORS.DARK_GRAY};
`;

export { Container, DataContainer, Title, ClientAddress };
