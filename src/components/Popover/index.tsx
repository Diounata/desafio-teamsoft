import { Body, Container, Polygon, Title } from './styles';

export function Popover() {
  return (
    <Container>
      <Polygon />
      <Title>Adicionado com sucesso</Title>

      <Body>
        <h2>Oferta Cheddar Bacon</h2>

        <h3>Ingredientes:</h3>

        <ul>
          <li>1 Carne 250g</li>
          <li>2 Queijo Cheddar</li>
          <li>1 Bacon</li>
          <li>Molho especial</li>
        </ul>
      </Body>
    </Container>
  );
}
