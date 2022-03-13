import { TitleContainer, Title, OptionContainer, Option, OptionButton } from './styles';

import { useProduct } from '../../../contexts/ProductContext';

export function Cutlery() {
  const { product } = useProduct();

  const { group } = product.ingredients[1];

  return (
    <>
      <TitleContainer>
        <Title>{group}</Title>
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
