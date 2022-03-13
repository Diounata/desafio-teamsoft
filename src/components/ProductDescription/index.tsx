import { Container, Title, Description, PriceContainer, DiscountedPrice, OldPrice } from './styles';

import { useProduct } from '../../contexts/ProductContext';
import { formatToCurrency } from '../../services/formatCurrency';

export function ProductDescription() {
  const { product } = useProduct();

  return (
    <Container>
      <Title>{product.nm_product}</Title>

      <Description>{product.description}</Description>

      <PriceContainer>
        <DiscountedPrice>{formatToCurrency(product.vl_discount)}</DiscountedPrice>
        <OldPrice>{formatToCurrency(product.vl_price)}</OldPrice>
      </PriceContainer>
    </Container>
  );
}
