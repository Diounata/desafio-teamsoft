import { Container, ProductImageContainer, ProductContainer } from '../styles/ProductPage';
import Image from 'next/image';

import { Header } from '../components/Header';
import { ProductDescription } from '../components/ProductDescription';
import { ProductIngredients } from '../components/ProductIngredients';
import { AddToCart } from '../components/AddToCart';

import burgerSVG from '../assets/burger.svg';

import { useProduct } from '../contexts/ProductContext';

export default function Home() {
  const { isLoading } = useProduct();

  return (
    <Container>
      <Header />

      <ProductContainer>
        {isLoading
          ? 'Loading...'
          : (
            <>
              <ProductImageContainer>
                <Image src={burgerSVG} width={343} height={130} />
              </ProductImageContainer>

              <ProductDescription />
              <ProductIngredients />
              <AddToCart />
            </>
        )}
      </ProductContainer>
    </Container>
  );
}
