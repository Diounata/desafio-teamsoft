import { Container } from './styles';

import { TitleContainer } from './Title';
import { Ingredient } from './Ingredient';

export function ProductIngredients() {
  return (
    <Container>
      <TitleContainer />

      <Ingredient />
      <Ingredient />
      <Ingredient />
      <Ingredient />
      <Ingredient />
    </Container>
  );
}
