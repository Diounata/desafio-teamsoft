import { TitleContainer, Title, OptionContainer, Option, OptionButton } from './styles';

import { useProduct } from '../../../contexts/ProductContext';

export function Cutlery() {
  const { product, needCutlery, toggleCutlery } = useProduct();

  const { group } = product.ingredients[1];

  return (
    <>
      <TitleContainer>
        <Title>{group}</Title>
      </TitleContainer>

      <OptionContainer>
        <Option>Sim</Option>

        <OptionButton
          onClick={() => toggleCutlery(true)}
          selected={needCutlery}
          children={<div />}
        />
      </OptionContainer>

      <OptionContainer>
        <Option>Não</Option>

        <OptionButton
          onClick={() => toggleCutlery(false)}
          selected={!needCutlery}
          children={<div />}
        />
      </OptionContainer>
    </>
  );
}
