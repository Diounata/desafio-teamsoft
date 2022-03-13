import { Container, IngredientContainer, Title, Price, AmountContainer, Amount } from './styles';
import Image from 'next/image';

import minusSignSVG from '../../../assets/minus-sign.svg';
import plusSignSVG from '../../../assets/plus-sign.svg';

import { IngredientItemProps } from '../../../types/ProductProps';
import { formatToCurrency } from '../../../services/formatCurrency';

interface Props {
  value: IngredientItemProps;
}

export function Ingredient({ value }: Props) {
  return (
    <Container>
      <IngredientContainer>
        <Title>{value.nm_item}</Title>
        <Price>+ {formatToCurrency(value.vl_item)}</Price>
      </IngredientContainer>

      <AmountContainer>
        <Image src={minusSignSVG} alt="Remover" height={14} />

        <Amount>1</Amount>

        <Image src={plusSignSVG} alt="Adicionar" height={14} />
      </AmountContainer>
    </Container>
  );
}
