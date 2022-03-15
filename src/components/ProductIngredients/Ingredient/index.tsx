import { Container, IngredientContainer, Title, Price, AmountContainer, Amount, Button } from './styles';
import Image from 'next/image';

import minusSignSVG from '../../../assets/minus-sign.svg';
import plusSignSVG from '../../../assets/plus-sign.svg';

import { IngredientAmountProps, IngredientItemProps } from '../../../types/ProductProps';
import { formatToCurrency } from '../../../services/formatCurrency';

interface Props {
  value: IngredientItemProps;
  ingredientAmount: IngredientAmountProps;
}

export function Ingredient({ value, ingredientAmount }: Props) {
  const { amount } = ingredientAmount;

  return (
    <Container>
      <IngredientContainer>
        <Title>{value.nm_item}</Title>
        <Price>+ {formatToCurrency(value.vl_item)}</Price>
      </IngredientContainer>

      <AmountContainer>
        <Button amount={amount}>
          <Image src={minusSignSVG} alt="Remover" height={14} />
        </Button>

        <Amount>{amount}</Amount>

        <Button>
          <Image src={plusSignSVG} alt="Adicionar" height={14} />
        </Button>
      </AmountContainer>
    </Container>
  );
}
