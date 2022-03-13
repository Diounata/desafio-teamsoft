import { Container, Title, Subtitle } from './styles';

import { useProduct } from '../../../contexts/ProductContext';

export function TitleContainer() {
  const { product } = useProduct();

  return (
    <Container>
      <Title>Adicionar Ingredientes</Title>

      <Subtitle>Até {product.ingredients[0].max_itens} ingredientes.</Subtitle>
    </Container>
  );
}
