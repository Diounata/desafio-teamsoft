import { CartSVGContainer, Container, DataContainer, Text } from './styles';
import Image from 'next/image';

import accountCircleSVG from '../../../assets/account-circle.svg';
import shoppingCartSVG from '../../../assets/shopping-cart.svg';

export function UserData() {
  return (
    <Container>
      <DataContainer>
        <Image src={accountCircleSVG} alt="Entrar" />

        <Text>Entrar</Text>
      </DataContainer>

      <DataContainer>
        <CartSVGContainer>
          <Image src={shoppingCartSVG} alt="Carrinho" />

          <div>7</div>
        </CartSVGContainer>

        <Text>Carrinho</Text>
      </DataContainer>
    </Container>
  );
}
