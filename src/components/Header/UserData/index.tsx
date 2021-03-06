import { CartSVGContainer, Container, DataContainer, Text } from './styles';
import Image from 'next/image';

import { Popover } from '../../Popover';

import accountCircleSVG from '../../../assets/account-circle.svg';
import shoppingCartSVG from '../../../assets/shopping-cart.svg';

import { useProduct } from '../../../contexts/ProductContext';

export function UserData() {
  const { isOrderConcluded, cartLength } = useProduct();

  return (
    <Container>
      <DataContainer>
        <Image src={accountCircleSVG} alt="Entrar" />

        <Text>Entrar</Text>
      </DataContainer>

      <DataContainer>
        <CartSVGContainer>
          <Image src={shoppingCartSVG} alt="Carrinho" />
          {isOrderConcluded && <Popover />}

          <div>{cartLength}</div>
        </CartSVGContainer>

        <Text>Carrinho</Text>
      </DataContainer>
    </Container>
  );
}
