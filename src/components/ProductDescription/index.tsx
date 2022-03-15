import { Container, Title, Description, PriceContainer, DiscountedPrice, OldPrice } from './styles';

import { useProduct } from '../../contexts/ProductContext';
import { formatToCurrency } from '../../services/formatCurrency';

export function ProductDescription() {
  const { product, originalPrice, discountedPrice } = useProduct();

  return (
    <Container>
      <Title>{product.nm_product}</Title>

      <Description>{product.description}</Description>

      <PriceContainer>
        <DiscountedPrice>{formatToCurrency(discountedPrice)}</DiscountedPrice>
        <OldPrice>{formatToCurrency(originalPrice)}</OldPrice>
      </PriceContainer>
    </Container>
  );
}
