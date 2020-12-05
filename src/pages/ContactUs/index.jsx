import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './styles.css';

const ContactUs = () => {
  return (
    <>
      <Header />
      <h2>Contato</h2>
      <hr />

      <section className='contatos'>
        <div className='contato'>
          <img
            src={
              'http://localhost/projeto-react-php-bootstrap/frontend/src/imagens/email.jpg'
            }
            width='40px'
            alt='Ícone de email'
          />
          <p>contato@fullstackeletro.com</p>
        </div>

        <div className='contato'>
          <img
            src={
              'http://localhost/projeto-react-php-bootstrap/frontend/src/imagens/whatsapp.jpg'
            }
            width='40px'
            alt='Ícone do whatsapp'
          />
          <p>(11) 9999-9999</p>
        </div>
      </section>
      <div className='container mb-5'>
        <form className='feedback bg-info text-white' action='' method='POST'>
          <div className='form-group'>
            <label for='exampleFormControlInput1'>Nome:</label>
            <input
              type='text'
              className='form-control'
              name='nome'
              id='exampleFormControlInput1'
            />
          </div>

          <div className='form-group'>
            <label for='exampleFormControlTextarea1'>Mensagem:</label>
            <textarea
              className='form-control'
              name='mensagem'
              id='exampleFormControlTextarea1'
              rows='3'
            ></textarea>
          </div>

          <input className='btn btn-warning' type='submit' value='Enviar' />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
