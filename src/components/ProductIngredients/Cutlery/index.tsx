import { TitleContainer, Title, OptionContainer, Option, OptionButton } from './styles';

export function Cutlery() {
  return (
    <>
      <TitleContainer>
        <Title>Precisa de Talher?</Title>
      </TitleContainer>

      <OptionContainer>
        <Option>Sim</Option>

        <OptionButton />
      </OptionContainer>

      <OptionContainer>
        <Option>Não</Option>

        <OptionButton />
      </OptionContainer>
    </>
  );
}
