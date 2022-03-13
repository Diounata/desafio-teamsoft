import { Container, Input } from './styles';
import Image from 'next/image';

import searchSVG from '../../../assets/search.svg';

export function SearchInput() {
  return (
    <Container>
      <Input type="text" placeholder="Busque por estabelecimento ou produtos" />

      <Image src={searchSVG} alt="Buscar" />
    </Container>
  );
}
