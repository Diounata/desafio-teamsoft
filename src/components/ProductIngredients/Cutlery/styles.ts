import styled from 'styled-components';

const TitleContainer = styled.section`
  margin-bottom: 1rem;
  padding: 8px 15px;
  padding-bottom: 16px;

  background-color: ${({ theme }) => theme.COLORS.LIGHT_YELLOW};
`;

const Title = styled.h2`
  font: 500 14px 'Roboto';
  color: ${({ theme }) => theme.COLORS.DARK_GRAY};

  margin-bottom: 0.5rem;
`;

const OptionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 16px 0;
`;

const Option = styled.p`
  font: 400 14px 'Roboto';
  color: ${({ theme }) => theme.COLORS.DARK_GRAY};
`;

const OptionButton = styled.button<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1rem;
  height: 1rem;
  padding: 0.1rem;

  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_YELLOW};
  border-radius: 1rem;

  cursor: pointer;

  div {
    width: 0.45rem;
    height: 0.45rem;

    background-color: ${props => props.selected && props.theme.COLORS.DARK_YELLOW};
    border-radius: 4px;
  }
`;

export { TitleContainer, Title, OptionContainer, Option, OptionButton };
