import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './styles.css';

const OurStores = () => {
  return (
    <>
      <Header />
      <h1>Nossas lojas</h1>
      <hr />

      <main className='lojas row'>
        <div className='loja col-3'>
          <h3>Rio de Janeiro</h3>
          <p>Avenida Presidente Vargas, 5000</p>
          <p>10 &ordm; andar</p>
          <p>Centro</p>
          <p>(21) 3333-3333</p>
        </div>

        <div className='loja col-3'>
          <h3>São Paulo</h3>
          <p>Avenida Paulista, 985</p>
          <p>3 &ordm; andar</p>
          <p>Jardins</p>
          <p>(11) 4444-4444</p>
        </div>

        <div className='loja col-3'>
          <h3>Santa Catarina</h3>
          <p>Rua Major &Aacute; vila, 370</p>
          <p>Vila Mariana</p>
          <p>(47) 5555-5555</p>
          <br />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OurStores;
