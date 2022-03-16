import { Body, Container, Polygon, Title } from './styles';

import { useProduct } from '../../contexts/ProductContext';

export function Popover() {
  const { orderValues } = useProduct();

  return (
    <Container>
      <Polygon />
      <Title>Adicionado com sucesso</Title>

      <Body>
        <h2>{orderValues.product_name}</h2>

        <h3>Ingredientes:</h3>

        <ul>
          {orderValues.ingredients.map(({ nm_item, amount }) => (
            <li>
              {amount} {nm_item}
            </li>
          ))}

          {orderValues.needCutlery && <li>1 Kit talheres</li>}
        </ul>
      </Body>
    </Container>
  );
}
