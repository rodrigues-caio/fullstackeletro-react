import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Categories from '../../components/Categories';
import CardsProducts from '../../components/CardsProducts';

const Products = () => {
  return (
    <div className='container-fluid'>
      <Header />
      <h1>Produtos</h1>
      <hr />
      <div className='row'>
        <div className='col-3'>
          <Categories />
        </div>
        <div className='col-9'>
          <CardsProducts />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
