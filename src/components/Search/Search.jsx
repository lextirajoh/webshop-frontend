import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useGetAllProductsQuery } from '../../utils/productsApi';
import styled from 'styled-components';

export default function Search() {
  const { data } = useGetAllProductsQuery();
  const { search } = window.location;
  const query = new URLSearchParams(search).get('q');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredProducts = filterProducts(data, searchQuery);
  const navigate = useNavigate();

  function filterProducts(data, query) {
    if (!query) {
      return data;
    }

    return data?.filter((product) => {
      const productTitle = product.title.toLowerCase();
      return productTitle.includes(query);
    });
  }

  function handleSubmit(e) {
    navigate.push(`${searchQuery}`);
    e.preventDefault();
  }

  return (
    <>
      <Form action="/" method="get" autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="search"
          name="q"
          id="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter search term..."
        />
        {searchQuery.length > 0 && (
          <Dropdown>
            {filteredProducts?.map((product) => (
              <DropdownItem key={product.id}>
                <Link to={`/product-detail/${product.id}`}>
                  <img src={product.image} alt={product.title} />
                  <span>{product.title}</span>
                </Link>
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </Form>
    </>
  );
}

const Form = styled.form`
  width: 20rem;
  margin: 2rem auto;

  input {
    width: 100%;
  }
`;

const Dropdown = styled.div`
  list-style: none;
  border: 1px solid grey;
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.2rem 0.5rem;

  img {
    width: 2rem;
    margin-right: 1rem;
  }

  :hover {
    font-weight: bold;
  }
`;
