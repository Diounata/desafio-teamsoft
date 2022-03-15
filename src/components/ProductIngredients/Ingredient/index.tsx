import { Container, IngredientContainer, Title, Price, AmountContainer, Amount, Button } from './styles';
import Image from 'next/image';

import minusSignSVG from '../../../assets/minus-sign.svg';
import plusSignSVG from '../../../assets/plus-sign.svg';

import { IngredientAmountProps, IngredientItemProps } from '../../../types/ProductProps';
import { formatToCurrency } from '../../../services/formatCurrency';

import { useProduct } from '../../../contexts/ProductContext';

interface Props {
  value: IngredientItemProps;
  ingredientAmount: IngredientAmountProps;
}

export function Ingredient({ value, ingredientAmount }: Props) {
  const { updateAmount } = useProduct();

  const { amount } = ingredientAmount;

  return (
    <Container>
      <IngredientContainer>
        <Title>{value.nm_item}</Title>
        <Price>+ {formatToCurrency(value.vl_item)}</Price>
      </IngredientContainer>

      <AmountContainer>
        <Button
          onClick={() => updateAmount({ action: 'decrease', type: 'ingredient', ingredientId: value.id })}
          amount={amount}
          disabled={amount === 0}
        >
          <Image src={minusSignSVG} alt="Diminuir" height={14} />
        </Button>

        <Amount>{amount}</Amount>

        <Button
          onClick={() => updateAmount({ action: 'increase', type: 'ingredient', ingredientId: value.id })}
        >
          <Image src={plusSignSVG} alt="Adicionar" height={14} />
        </Button>
      </AmountContainer>
    </Container>
  );
}
