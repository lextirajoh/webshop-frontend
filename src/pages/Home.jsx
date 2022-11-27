import { useGetAllProductsQuery } from '../utils/productsApi';
import Card from '../components/Card';
import styled from 'styled-components';
import marvel from '../assets/marvel.webp';
import Footer from '../components/Footer/Footer';

export default function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();



  return (
    <>
      <Main>
        <Hero>
          <HeroTitle>
            <h1>Marvel Champions: The Card Game</h1>
            <h2><a href="/product-detail/9">Opnieuw in voorraad</a> </h2>
          </HeroTitle>
          <HeroImg src={marvel} alt="Marvel superheroes" />
        </Hero>

        <MiddleSection>
          <MiddleTitle>NU POPULAIR</MiddleTitle>
          <ProductContainer>
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>An error occured...</p>
            ) : (
              <>
                {data?.map((product) =>
                  product.category === 'Strategie' ? (
                    <div key={product.id}>
                      <Card product={product} />
                    </div>
                  ) : null
                )}
              </>
            )}
          </ProductContainer>
        </MiddleSection>
        <hr />
        <MiddleSection>
          <MiddleTitle>ONZE AANRADERS</MiddleTitle>
          <ProductContainer>
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>An error occured...</p>
            ) : (
              <>
                {data?.map((product) =>
                  product.category === 'Familie' ? (
                    <div key={product.id}>
                      <Card product={product} />
                    </div>
                  ) : null
                )}
              </>
            )}
          </ProductContainer>
        </MiddleSection>
        <Footer></Footer>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 4rem;
  justify-content: center;
  align-items: center;

  hr {
    width: 100%;
    margin: 3rem 0;
  }
`;

const Hero = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem 5rem;
  background-color: rgba(255, 255, 255, 0.1);
`;

const HeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Futura;
  font-weight: 700;

  h1 {
    font-size: 5rem;
    color: gold;
  }

  h2 {
    font-size: 4rem;

    a {
      color: white;
    }
  }
`;

const HeroImg = styled.img`
  width: 50%;
  height: 50%;
`;

const MiddleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 90%;

  :last-of-type {
    margin-bottom: 7rem;
  }
`;

const MiddleTitle = styled.p`
  display: block;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 2.5rem;
  font-style: italic;
  font-weight: bold;
  color: white;
  text-shadow: 5px 5px #16cb34;
  font-weight: bold;
  border-radius: 10px;
  float: left;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
