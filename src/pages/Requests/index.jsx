import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './styles.css';

const Requests = () => {
  return (
    <>
      <Header />

      <form action='pedido-realizado.html' method='post'>
        <h2>Informe os seus dados:</h2>

        <label for='nome'>Nome:</label>
        <input type='text' name='nome' id='nome' />

        <label for='email'>Email:</label>
        <input type='email' name='email' id='email' />

        <label for='endereco'>Endereço:</label>
        <input type='text' name='endereco' id='endereco' />

        <label for='cep'>Cep:</label>
        <input type='number' name='cep' id='cep' />

        <h2>Qual é o seu pedido?</h2>

        <label for='quantidade'>Quantidade:</label>
        <input type='number' name='quantidade' id='quantidade' />

        <input
          class='btn btn-success my-4'
          type='submit'
          value='Realizar pedido!'
        />
      </form>

      <Footer />
    </>
  );
};

export default Requests;
