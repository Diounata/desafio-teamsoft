import axios, { Axios } from 'axios';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ProductProps } from '../types/ProductProps';

const ProductContext = createContext({} as ContextProps);

interface ChildrenProps {
  children: ReactNode;
}

interface ContextProps {
  product: ProductProps;
  isLoading: boolean;
}

export function ProductProvider({ children }: ChildrenProps) {
  const [product, setProduct] = useState<ProductProps>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products').then(res => {
      const data = res.data[0];

      setProduct(data);
      setIsLoading(false);
    });
  }, []);

  return <ProductContext.Provider value={{ product, isLoading }}>{children}</ProductContext.Provider>;
}

export function useProduct() {
  return useContext(ProductContext);
}
