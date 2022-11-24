import { useGetAllProductsQuery } from '../utils/productsApi';
import slide1 from '../assets/slide1.webp';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.png';
import home1 from '../assets/home1.jpg';
import Card from '../components/Card';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <>
      <Main>
        <BlackWrap>
          <Hero>
            <Carousel
              interval={7000}
              transitionTime={3000}
              showThumbs={false}
              showArrows={false}
              autoPlay={true}
              infiniteLoop={true}
              emulateTouch={true}
              showStatus={false}
            >
              <Banner>
                <img src={slide1} />
                <div>
                  <p>GAME-NIGHT</p>
                  <h3>ELKE VRIJDAG OM 20:00</h3>
                </div>
              </Banner>
              <Banner>
                <img src={slide3} />
                <div>
                  <p>UITVERKOOP</p>
                  <h3>SLA JE SLAG</h3>
                </div>
              </Banner>
              <Banner>
                <img src={slide2} />
                <div>
                  <p>NIEUW BINNEN</p>
                  <h3>DE HOTSTE GAMES</h3>
                </div>
              </Banner>
            </Carousel>
          </Hero>
        </BlackWrap>
        <hr />

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

        <hr />
      </Main>
       
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 7rem;
  justify-content: center;

  hr {
    width: 100%;
    margin: 3rem 0;
  }

  @media (max-width: 62rem) {
    width: 95%;
  }
`;

const BlackWrap = styled.div`
  padding: 1.5rem 2rem;
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.15);
`;

const Hero = styled.div``;

const Banner = styled.div`
  position: relative;
  display: inline-block;

  cursor: pointer;

  img {
    display: block;
    object-fit: cover;
  }

  div {
    position: absolute;
    top: 70%;
    left: 50%;
    width: 100%;
    padding: 1rem;
    transform: translate(-50%, -50%);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 4rem;
    font-style: italic;
    font-weight: bold;
    color: white;
    text-shadow: 5px 5px #e918d8;
    font-weight: bold;
    border-radius: 10px;
  }
`;

const MiddleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
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



