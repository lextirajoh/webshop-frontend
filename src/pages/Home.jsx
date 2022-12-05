import { useGetAllProductsQuery } from '../utils/productsApi';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import styled from 'styled-components';
import marvel from '../assets/marvel2.png';
import Footer from '../components/Footer/Footer';

export default function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <>
      <Main>
        <Hero>
          <HeroTitle>
            <h1>
              Marvel Champions: <br />
              The Card Game
            </h1>
            <p>
              Kruip in de huid van je favoriete Marvel-held en versla de
              schurken uit het universum!
            </p>
            <p>
              <Link to="/product-detail/11">Weer op voorraad!</Link>
            </p>
          </HeroTitle>
          <HeroImg src={marvel} alt="Marvel superheroes" />
        </Hero>

        <FeaturedSection>
          <FeaturedTitle>
            <Link to="/products/Familie">
              FAMILIESPELLEN VOOR DE FEESTDAGEN
            </Link>
          </FeaturedTitle>
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
        </FeaturedSection>

        <FeaturedSection>
          <FeaturedTitle>
            <Link to="/products/Party">ONZE FAVORIETE PARTYSPELLEN</Link>
          </FeaturedTitle>
          <ProductContainer>
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>An error occured...</p>
            ) : (
              <>
                {data?.map((product) =>
                  product.category === 'Party' ? (
                    <Card product={product} key={product.id} />
                  ) : null
                )}
              </>
            )}
          </ProductContainer>
        </FeaturedSection>

        <FeaturedSection>
          <FeaturedTitle>
            <Link to="/products/Strategie">POPULAIRE STRATEGIESPELLEN</Link>
          </FeaturedTitle>
          <ProductContainer>
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>An error occured...</p>
            ) : (
              <>
                {data?.map((product) =>
                  product.category === 'Strategie' ? (
                    <Card product={product} key={product.id} />
                  ) : null
                )}
              </>
            )}
          </ProductContainer>
        </FeaturedSection>

        <Footer />
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
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 1rem 0rem;
  background-color: rgba(255, 255, 255, 0.3);
`;

const HeroTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  h1 {
    position: absolute;
    top: 5%;
    left: 3%;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

    font-size: 8vw;
    color: gold;
    font-weight: 900;
    text-shadow: 3px 3px 3px #393939;
    font-style: italic;
  }
  p:nth-of-type(1) {
    position: absolute;
    display: none;
    top: 45%;
    left: 5%;
    width: 35%;
    font-size: 1.7vw;
    font-weight: 900;
    text-shadow: 1px 1px 1px #393939;
  }

  p:nth-of-type(2) {
    position: absolute;
    top: 20%;
    left: 60%;
    font-size: 6vw;
    font-weight: 900;
    text-shadow: 1px 1px 1px #393939;

    a {
      color: white;
      text-decoration: underline;

      :hover {
        color: gold;
      }
    }
  }

  @media (min-width: 50rem) {
    h1 {
      top: 8%;
      font-size: 5vw;
      text-shadow: 4px 4px #393939;
    }

    p:nth-of-type(1) {
      display: block;
    }

    p:nth-of-type(2) {
      top: 70%;
      left: 5%;
      font-size: 2vw;
    }
  }
`;

const HeroImg = styled.img`
  width: 100%;
  margin-bottom: -1.5rem;
  padding-top: 6rem;
  background-image: radial-gradient(
    0% 50% at bottom,
    rgba(0, 0, 0, 0.9),
    transparent
  );

  @media (min-width: 50rem) {
    width: 70%;
    margin-bottom: -5rem;
    padding-top: 0;
    background-image: radial-gradient(
      50% 50% at center,
      rgba(0, 0, 0, 0.9),
      transparent
    );
  }
`;

const FeaturedSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding-top: 1rem;
  width: 100%;
  border-top: 3px solid gold;

  :last-of-type {
    margin-bottom: 7rem;
  }

  @media (min-width: 50rem) {
    padding: 3rem 0;
  }
`;

const FeaturedTitle = styled.h2`
  display: block;
  text-align: center;

  text-shadow: 2px 2px 2px #393939;

  @media (min-width: 50rem) {
    padding-left: 3rem;
    font-size: 2.5rem;
    text-align: start;
    text-shadow: 3px 3px 3px #393939;
    margin-bottom: 2rem;
  }

  a {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 2rem;
    font-style: italic;
    font-weight: bold;
    color: gold;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
