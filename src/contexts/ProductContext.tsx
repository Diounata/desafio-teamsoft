import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { AmountProps, ProductProps } from '../types/ProductProps';
import axios from 'axios';

const ProductContext = createContext({} as ContextProps);

interface ChildrenProps {
  children: ReactNode;
}

interface UpdateAmountProps {
  action: '-' | '+';
  type: 'ingredient' | 'product';
  ingredientId?: number;
}

interface ContextProps {
  product: ProductProps;
  amount: AmountProps;
  totalIngredientsAmount: number;
  needCutlery: boolean;
  originalPrice: number;
  discountedPrice: number;
  isLoading: boolean;

  updateAmount(props: UpdateAmountProps): void;
  toggleCutlery(value: boolean): void;
}

export function ProductProvider({ children }: ChildrenProps) {
  const [product, setProduct] = useState<ProductProps>();
  const [amount, setAmount] = useState<AmountProps>();
  const [totalIngredientsAmount, setTotalIngredientsAmount] = useState<number>();
  const [needCutlery, setNeedCutlery] = useState(false);
  const [originalPrice, setOriginalPrice] = useState<number>();
  const [discountedPrice, setDiscountedPrice] = useState<number>();
  const [isLoading, setIsLoading] = useState(true);

  function updateAmount(props: UpdateAmountProps): void {
    const { action, type, ingredientId } = props;

    const calcAmont = (element: number) => {
      return action === '+' ? element + 1 : element - 1;
    };

    if (type === 'product') {
      let productAmount = amount.product;

      if (productAmount === 1 && action === '-') return;

      productAmount = calcAmont(productAmount);

      return setAmount(prev => ({ ...prev, product: productAmount }));
    }

    const ingredientsAmount = amount.ingredients
      .map(item => item.amount)
      .reduce((prev, current) => prev + current);

    if (ingredientsAmount >= 8 && action === '+') return;

    const ingredient = amount.ingredients.find(item => item.id === ingredientId);

    ingredient.amount = calcAmont(ingredient.amount);

    const newIngredients = amount.ingredients.map(item => (item.id === ingredientId ? ingredient : item));

    setAmount(prev => ({ ...prev, ingredients: newIngredients }));
  }

  function toggleCutlery(value: boolean): void {
    setNeedCutlery(value);
  }

  useEffect(() => {
    axios.get('https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products').then(res => {
      const data: ProductProps = res.data[0];

      const ingredientsAmount = data.ingredients[0].itens.map(ingredient => {
        return { ...ingredient, amount: 1 };
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

  useEffect(() => {
    if (isLoading) return;

    let amountPrice = amount.product * product.vl_price;
    const productAmount = amount.ingredients;
    const ingredientsAmount = amount.ingredients
      .map(element => element.amount)
      .reduce((prev, current) => prev + current);

    for (let i = 0; i < productAmount.length; i++) {
      const { vl_item, amount } = productAmount[i];

      amountPrice += vl_item * amount;
    }

    const PRODUCT_DISCOUNT_VALUE = product.vl_discount / product.vl_price;

    setTotalIngredientsAmount(ingredientsAmount);
    setDiscountedPrice(amountPrice * PRODUCT_DISCOUNT_VALUE);
    setOriginalPrice(amountPrice);
  }, [isLoading, amount]);

  return (
    <ProductContext.Provider
      value={{
        product,
        amount,
        totalIngredientsAmount,
        needCutlery,
        originalPrice,
        discountedPrice,
        isLoading,
        updateAmount,
        toggleCutlery,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
