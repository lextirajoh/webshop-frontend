import { NavLink } from 'react-router-dom';
import { useGetAllProductsQuery } from '../utils/productsApi';
import Card from '../components/Card';
import styled from 'styled-components';

export default function Products() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  let activeStyle = {
    borderBottom: '3px solid white',
  };

  return (
    <>
      <Main>
        <BlackWrap>
          <Heading>
            <h2>Alle spellen</h2>
            <hr />
          </Heading>
          <Sidebar>
            <hr />
            <h5>Filters:</h5>
            <ul>
            <li>
              <NavLink
                to="/products"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Alle spellen
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/Strategie"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Strategie
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/Familie"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Familie
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/Abstract"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Abstract
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

              {/* <Outlet /> */}
            </ProductContainer>
          </ProductGrid>
        </BlackWrap>
      </Main>
    </>
  );
}

const Main = styled.main`
  width: 80%;
  margin-top: 7rem;

  @media (max-width: 62rem) {
    margin-top: 6rem;
    padding-bottom: 12rem;
  }
`;

const BlackWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr auto;
  column-gap: 2rem;
  row-gap: 1rem;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1.5rem 2rem;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 62rem) {
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
  margin: 0 auto;
`;

const Sidebar = styled.nav`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
  width: 15rem;
  padding: 1.5rem 2rem;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1.1rem;
  border-radius: 10px;

  li {
    padding: .5rem 0;
  }

  a{
    color: white;

    :hover{
      color: #cfcfcf;
    }
  }

  @media (max-width: 62rem) {
    display: none;
  }
`;
const ProductGrid = styled.div`
  grid-column: 2 / 5;
  grid-row: 2 / 3;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
