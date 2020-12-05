import { useState, useEffect } from 'react';

import './styles.css';

const CardProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getApi() {
      const url = 'http://localhost/projeto-react-php-bootstrap/backend/';

      const response = await fetch(url);

      const data = await response.json();

      setProducts(data);
    }

    getApi();
  }, []);

  function increaseImage(element) {
    const image = element;

    image.style = 'width: 300px';
  }

  function decreaseImage(element) {
    const image = element;

    image.style = 'width: 120px';
  }

  return (
    <>
      <div className='row'>
        {products.map((product) => {
          return (
            <div
              className='box-produto col-3 d-flex-column justify-content-center align-items-center'
              id={product.categoria}
              key={product.idproduto}
            >
              <img
                src={
                  'http://localhost/projeto-react-php-bootstrap/frontend/src/' +
                  product.imagem
                }
                onMouseOver={(event) => increaseImage(event.target)}
                onMouseOut={(event) => decreaseImage(event.target)}
                alt={product.descricao}
              />
              <div>
                <p className='descricao'>{product.descricao}</p>
                <hr />
                <p className='descricao'>
                  <strike>R$ {product.preco}</strike>
                </p>
                <p className='preco_final'>R$ {product.precofinal}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardProduct;
