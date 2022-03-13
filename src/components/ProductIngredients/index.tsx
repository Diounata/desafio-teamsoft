import { Container } from './styles';

import { TitleContainer } from './Title';
import { Ingredient } from './Ingredient';
import { Cutlery } from './Cutlery';

export function ProductIngredients() {
  return (
    <Container>
      <TitleContainer />

      <Ingredient />
      <Ingredient />
      <Ingredient />
      <Ingredient />
      <Ingredient />

      <Cutlery />
    </Container>
  );
}
