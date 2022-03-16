import { Container, AmountContainer, Amount, AddButton, AmountButton } from './styles';
import Image from 'next/image';

import minusSignSVG from '../../assets/minus-sign.svg';
import plusSignSVG from '../../assets/plus-sign.svg';

import { useProduct } from '../../contexts/ProductContext';

export function AddToCart() {
  const { amount, updateAmount, finishOrder } = useProduct();

  return (
    <Container>
      <AmountContainer>
        <AmountButton
          onClick={() => updateAmount({ action: '-', type: 'product' })}
          amount={amount.product}
          disabled={amount.product === 1}
        >
          <Image src={minusSignSVG} alt="Diminuir" />
        </AmountButton>

        <Amount>{amount.product}</Amount>

        <AmountButton onClick={() => updateAmount({ action: '+', type: 'product' })}>
          <Image src={plusSignSVG} alt="Aumentar" />
        </AmountButton>
      </AmountContainer>

      <AddButton onClick={finishOrder}>Adicionar</AddButton>
    </Container>
  );
}
