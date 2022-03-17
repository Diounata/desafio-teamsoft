import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

import { Container, IngredientsContainer, ProductImageContainer } from '../styles/ProductPage';
import Image from 'next/image';

import { Header } from '../components/Header';
import { ProductDescription } from '../components/ProductDescription';
import { ProductIngredients } from '../components/ProductIngredients';
import { AddToCart } from '../components/AddToCart';

import burgerSVG from '../assets/burger.svg';

import { useProduct } from '../contexts/ProductContext';
import { useDeviceWidth } from '../services/useDeviceWidth';
import { AmountProps, ProductProps } from '../types/ProductProps';

interface Props {
  data: ProductProps;
  productAmount: AmountProps;
}

export default function Home(props: Props) {
  const { isLoading, setInitialValues } = useProduct();
  const { deviceWidth } = useDeviceWidth();

  useEffect(() => setInitialValues(props), []);

  return (
    <>
      <Header />

      <Container>
        {isLoading
          ? 'Loading...'
          : (
            <>
              <section>
                <ProductImageContainer>
                  <Image
                    src={burgerSVG}
                    width={deviceWidth > 1024 ? 686 : 343}
                    height={deviceWidth > 1024 ? 260 : 130}
                  />
                </ProductImageContainer>

                <ProductDescription />
              </section>

              <IngredientsContainer>
                <ProductIngredients />
                <AddToCart />
              </IngredientsContainer>
            </>
        )}
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let props;

  await axios.get('https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products').then(res => {
    const data: ProductProps = res.data[0];

    const ingredientsAmount = data.ingredients[0].itens.map(ingredient => {
      return { ...ingredient, amount: 1 };
    });

    const productAmount: AmountProps = {
      product: 1,
      ingredients: ingredientsAmount,
    };

    props = {
      data,
      productAmount,
    };
  });

  return {
    props,
  };
};
