import { Container } from './styles';

import { TitleContainer } from './Title';
import { Ingredient } from './Ingredient';
import { Cutlery } from './Cutlery';

import { useProduct } from '../../contexts/ProductContext';

export function ProductIngredients() {
  const { product, amount } = useProduct();

  return (
    <Container>
      <TitleContainer />

      {product.ingredients[0].itens.map(ingredient => {
        const ingredientAmount = amount.ingredients[ingredient.id - 1];

        return <Ingredient value={ingredient} ingredientAmount={ingredientAmount} key={ingredient.id} />;
      })}

      <Cutlery />
    </Container>
  );
}
