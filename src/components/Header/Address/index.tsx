import { Container, DataContainer, Title, ClientAddress } from './styles';
import Image from 'next/image';

import arrowDownSVG from '../../../assets/arrow-down.svg';

export function Address() {
  return (
    <Container>
      <DataContainer>
        <Title>Entrega:</Title>
        <ClientAddress>R. Antonio Braune, 222</ClientAddress>
      </DataContainer>

      <Image src={arrowDownSVG} alt="Select" />
    </Container>
  );
}
