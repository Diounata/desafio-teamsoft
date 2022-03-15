import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { AmountProps, IngredientAmountProps, ProductProps } from '../types/ProductProps';
import axios from 'axios';

const ProductContext = createContext({} as ContextProps);

interface ChildrenProps {
  children: ReactNode;
}

interface UpdateAmountProps {
  action: 'decrease' | 'increase';
  type: 'ingredient' | 'product';
  ingredientId?: number;
}

interface ContextProps {
  product: ProductProps;
  amount: AmountProps;
  isLoading: boolean;

  updateAmount(props: UpdateAmountProps): void;
}

export function ProductProvider({ children }: ChildrenProps) {
  const [product, setProduct] = useState<ProductProps>();
  const [amount, setAmount] = useState<AmountProps>();
  const [isLoading, setIsLoading] = useState(true);

  function updateAmount(props: UpdateAmountProps): void {
    const { action, type, ingredientId } = props;

    const calcAmont = (element: number) => {
      return action === 'increase' ? element + 1 : element - 1;
    };

    if (type === 'product') {
      let productAmount = amount.product;

      if (productAmount === 1 && action === 'decrease') return;

      productAmount = calcAmont(productAmount);

      return setAmount(prev => ({ ...prev, product: productAmount }));
    }

    const ingredient = amount.ingredients.find(item => item.id === ingredientId);

    ingredient.amount = calcAmont(ingredient.amount);

    const newIngredients = amount.ingredients.map(item => (item.id === ingredientId ? ingredient : item));

    setAmount(prev => ({ ...prev, ingredients: newIngredients }));
  }

  useEffect(() => {
    axios.get('https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products').then(res => {
      const data: ProductProps = res.data[0];

      const ingredientsAmount = data.ingredients[0].itens.map(({ id, nm_item }) => {
        return { id, nm_item, amount: 1 };
      });

      const productAmount: AmountProps = {
        product: 1,
        ingredients: ingredientsAmount,
      };

      setProduct(data);
      setAmount(productAmount);
      setIsLoading(false);
    });
  }, []);

  return (
    <ProductContext.Provider value={{ product, amount, isLoading, updateAmount }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
