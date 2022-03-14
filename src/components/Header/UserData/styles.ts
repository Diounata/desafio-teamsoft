import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const DataContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  background-color: inherit;
  border: none;
  cursor: pointer;
`;

const Text = styled.p`
  font: 400 1rem 'Roboto';
  color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
`;

const CartSVGContainer = styled.div`
  position: relative;

  > div:last-child {
    display: grid;
    place-items: center;

    width: 1.2rem;
    height: 1.2rem;

    position: absolute;
    top: -12px;
    right: -10px;

    text-align: center;
    font-size: 12px;
    color: #ffffff;
    background-color: ${({ theme }) => theme.COLORS.SECONDARY_COLOR};
    border-radius: 10px;
  }
`;

export { Container, DataContainer, Text, CartSVGContainer };
