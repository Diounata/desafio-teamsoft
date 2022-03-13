import { Container } from './styles';

import { TitleContainer } from './Title';
import { Ingredient } from './Ingredient';
import { Cutlery } from './Cutlery';

import { useProduct } from '../../contexts/ProductContext';

export function ProductIngredients() {
  const { product } = useProduct();

  return (
    <Container>
      <TitleContainer />

      {product.ingredients[0].itens.map(ingredient => (
        <Ingredient value={ingredient} key={ingredient.id} />
      ))}

      <Cutlery />
    </Container>
  );
}
