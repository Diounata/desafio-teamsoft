import { Container, Title, Description, PriceContainer, DiscountedPrice, OldPrice } from './styles';

export function ProductDescription() {
  return (
    <Container>
      <Title>Oferta picanha cheddar bacon</Title>

      <Description>
        Delicioso hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar
        e pão mix de gergelim, acompanhamento e bebida.
      </Description>

      <PriceContainer>
        <DiscountedPrice>R$31,99</DiscountedPrice>
        <OldPrice>R$34,95</OldPrice>
      </PriceContainer>
    </Container>
  );
}
