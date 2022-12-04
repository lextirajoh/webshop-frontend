import { NavLink } from 'react-router-dom';
import { useGetAllProductsQuery } from '../utils/productsApi';
import Card from '../components/Card';
import Footer from '../components/Footer/Footer';
import styled from 'styled-components';

export default function Products() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  let activeStyle = {
    borderBottom: '3px solid white',
  };

  return (
    <>
      <Container>
        <Main>
          <BlackWrap>
            <Heading>
              <h1 className="heading">Alle spellen</h1>
            </Heading>
            <Sidebar>
              <hr />
              <h2>Filters:</h2>
              <ul>
                <li>
                  <NavLink
                    to="/products"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Alle spellen
                  </NavLink>
                </li>
                <li>
                      <NavLink
                        to="/products/Strategie"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        Strategie
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/products/Familie"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        Familie
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/products/Party"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        Party
                      </NavLink>
                    </li>
              </ul>
              <hr />
            </Sidebar>
            <ProductGrid>
              <ProductContainer>
                {isLoading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>An error occured...</p>
                ) : (
                  <>
                    {data?.map((product) => (
                      <div key={product.id}>
                        <Card product={product} />
                      </div>
                    ))}
                  </>
                )}
              </ProductContainer>
            </ProductGrid>
          </BlackWrap>
        </Main>
        <Footer />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 0.1);
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 4rem 0;

  @media (max-width: 62rem) {
    margin-top: 6rem;
  }
`;

const BlackWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr auto;
  grid-row-gap: 1rem;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 50rem) {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    padding: 1.5rem 0;
  }

  hr {
    width: 100%;
  }
`;

const Heading = styled.div`
  grid-column: 1 / 5;
  grid-row: 1 / 2;
  margin: 2rem auto;
`;

const Sidebar = styled.nav`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem 2rem;
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  font-size: 1.1rem;
  border-radius: 10px;

  li {
    padding: 0.5rem 0;
  }

  a {
    color: white;

    :hover {
      color: #cfcfcf;
    }
  }

  @media (max-width: 50rem) {
    display: none;
  }
`;
const ProductGrid = styled.div`
  grid-column: 2 / 5;
  grid-row: 2 / 3;

  @media (max-width: 50rem) {
    grid-column: 1 / 5;
    width: 100%;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
