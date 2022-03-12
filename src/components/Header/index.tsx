import { Container, LogoContainer } from './styles';
import Image from 'next/image';

import arrowLeftSVG from '../../assets/arrow-left.svg';
import deliverizePNG from '../../assets/Deliverize.png';

export function Header() {
  return (
    <Container>
      <Image src={arrowLeftSVG} alt="Voltar" />

      <LogoContainer>
        <Image src={deliverizePNG} alt="Deliverize" />
      </LogoContainer>
    </Container>
  );
}
