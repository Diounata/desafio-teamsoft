import { Container, AmountContainer, Amount, AddButton } from './styles';
import Image from 'next/image';

import minusSignSVG from '../../assets/minus-sign.svg';
import plusSignSVG from '../../assets/plus-sign.svg';

export function AddToCart() {
  return (
    <Container>
      <AmountContainer>
        <Image src={minusSignSVG} alt="Diminuir" />

        <Amount>1</Amount>

        <Image src={plusSignSVG} alt="Aumentar" />
      </AmountContainer>

      <AddButton>Adicionar</AddButton>
    </Container>
  );
}
