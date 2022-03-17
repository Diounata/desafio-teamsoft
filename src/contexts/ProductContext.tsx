import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { AmountProps, ProductProps } from '../types/ProductProps';
import axios from 'axios';

const ProductContext = createContext({} as ContextProps);

interface ChildrenProps {
  children: ReactNode;
}

interface InitialValuesProps {
  data: ProductProps;
  productAmount: AmountProps;
}

interface UpdateAmountProps {
  action: '-' | '+';
  type: 'ingredient' | 'product';
  ingredientId?: number;
}

interface OrderValuesProps {
  product_name: string;
  needCutlery: boolean;
  ingredients: {
    nm_item: string;
    amount: number;
  }[];
}

interface ContextProps {
  product: ProductProps;
  amount: AmountProps;
  totalIngredientsAmount: number;
  needCutlery: boolean;
  originalPrice: number;
  discountedPrice: number;
  isLoading: boolean;
  isOrderConcluded: boolean;
  orderValues: OrderValuesProps;
  cartLength: number;

  setInitialValues(values: InitialValuesProps): void;
  updateAmount(props: UpdateAmountProps): void;
  toggleCutlery(value: boolean): void;
  finishOrder(): void;
}

export function ProductProvider({ children }: ChildrenProps) {
  const [product, setProduct] = useState<ProductProps>();
  const [amount, setAmount] = useState<AmountProps>();
  const [totalIngredientsAmount, setTotalIngredientsAmount] = useState<number>();
  const [needCutlery, setNeedCutlery] = useState(false);
  const [originalPrice, setOriginalPrice] = useState<number>();
  const [discountedPrice, setDiscountedPrice] = useState<number>();
  const [isLoading, setIsLoading] = useState(true);
  const [isOrderConcluded, setIsOrderConcluded] = useState(false);
  const [orderValues, setOrderValues] = useState<OrderValuesProps>();
  const [cartLength, setCartLength] = useState<number>(0);

  function setInitialValues({ data, productAmount }: InitialValuesProps): void {
    setProduct(data);
    setAmount(productAmount);
    setIsLoading(false);
  }

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

  function resetOrder(): void {
    const newAmount: AmountProps = {
      product: 1,
      ingredients: product.ingredients[0].itens.map(item => ({ ...item, amount: 1 })),
    };

    setAmount(newAmount);
    setNeedCutlery(false);
  }

  function finishOrder(): void {
    const ingredients = amount.ingredients.map(({ nm_item, amount }) => ({ nm_item, amount }));
    const orderValues: OrderValuesProps = {
      product_name: product.nm_product,
      needCutlery,
      ingredients: [
        { nm_item: 'carne 250g', amount: 1 },
        { nm_item: 'Bacon', amount: 1 },
        { nm_item: 'Molho especial', amount: 1 },
        ...ingredients,
      ],
    };

    setTimeout(() => setIsOrderConcluded(false), 10000);
    window.alert('Sua compra foi adicionada ao carrinho com sucesso!');

    setCartLength(prev => prev + amount.product);
    setIsOrderConcluded(true);
    setOrderValues(orderValues);
    resetOrder();
  }

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
        isOrderConcluded,
        orderValues,
        cartLength,
        setInitialValues,
        updateAmount,
        toggleCutlery,
        finishOrder,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
