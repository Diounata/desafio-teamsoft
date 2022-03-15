import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { AmountProps, ProductProps } from '../types/ProductProps';
import axios from 'axios';

const ProductContext = createContext({} as ContextProps);

interface ChildrenProps {
  children: ReactNode;
}

interface ContextProps {
  product: ProductProps;
  amount: AmountProps;
  isLoading: boolean;
}

export function ProductProvider({ children }: ChildrenProps) {
  const [product, setProduct] = useState<ProductProps>();
  const [amount, setAmount] = useState<AmountProps>();
  const [isLoading, setIsLoading] = useState(true);

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

  return <ProductContext.Provider value={{ product, amount, isLoading }}>{children}</ProductContext.Provider>;
}

export function useProduct() {
  return useContext(ProductContext);
}
