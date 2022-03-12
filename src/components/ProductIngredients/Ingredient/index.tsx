import { Container, IngredientContainer, Title, Price, AmountContainer, Amount } from './styles';
import Image from 'next/image';

import minusSignSVG from '../../../assets/minus-sign.svg';
import plusSignSVG from '../../../assets/plus-sign.svg';

export function Ingredient() {
  return (
    <Container>
      <IngredientContainer>
        <Title>Queijo cheddar</Title>
        <Price>+ R$4,99</Price>
      </IngredientContainer>

      <AmountContainer>
        <Image src={minusSignSVG} alt="Remover" height={14} />

        <Amount>2</Amount>

        <Image src={plusSignSVG} alt="Adicionar" height={14} />
      </AmountContainer>
    </Container>
  );
}
