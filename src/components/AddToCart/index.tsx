import { Container, AmountContainer, Amount, AddButton, AmountButton } from './styles';
import Image from 'next/image';

import minusSignSVG from '../../assets/minus-sign.svg';
import plusSignSVG from '../../assets/plus-sign.svg';

import { useProduct } from '../../contexts/ProductContext';

export function AddToCart() {
  const { amount } = useProduct();

  return (
    <Container>
      <AmountContainer>
        <AmountButton amount={1}>
          <Image src={minusSignSVG} alt="Diminuir" />
        </AmountButton>

        <Amount>{amount.product}</Amount>

        <AmountButton>
          <Image src={plusSignSVG} alt="Aumentar" />
        </AmountButton>
      </AmountContainer>

      <AddButton>Adicionar</AddButton>
    </Container>
  );
}
