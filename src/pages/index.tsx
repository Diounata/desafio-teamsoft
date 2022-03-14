import { Container, IngredientsContainer, ProductImageContainer } from '../styles/ProductPage';
import Image from 'next/image';

import { Header } from '../components/Header';
import { ProductDescription } from '../components/ProductDescription';
import { ProductIngredients } from '../components/ProductIngredients';
import { AddToCart } from '../components/AddToCart';

import burgerSVG from '../assets/burger.svg';

import { useProduct } from '../contexts/ProductContext';
import { useDeviceWidth } from '../services/useDeviceWidth';

export default function Home() {
  const { isLoading } = useProduct();
  const { deviceWidth } = useDeviceWidth();

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
