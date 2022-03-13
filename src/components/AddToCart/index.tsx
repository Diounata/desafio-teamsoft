import { Container, AmountContainer, Amount, AddButton, AmountButton } from './styles';
import Image from 'next/image';

import minusSignSVG from '../../assets/minus-sign.svg';
import plusSignSVG from '../../assets/plus-sign.svg';

export function AddToCart() {
  return (
    <Container>
      <AmountContainer>
        <AmountButton amount={1}>
          <Image src={minusSignSVG} alt="Diminuir" />
        </AmountButton>

        <Amount>1</Amount>

        <AmountButton>
          <Image src={plusSignSVG} alt="Aumentar" />
        </AmountButton>
      </AmountContainer>

      <AddButton>Adicionar</AddButton>
    </Container>
  );
}
