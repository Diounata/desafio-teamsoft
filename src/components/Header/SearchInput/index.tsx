import { Container, Input } from './styles';

export function SearchInput() {
  return (
    <Container>
      <Input type="text" placeholder="Busque por estabelecimento ou produtos" />
    </Container>
  );
}
