import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
import Requests from './pages/Requests';
import OurStores from './pages/OurStores';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/fale-conosco' component={ContactUs} />
        <Route path='/produtos' component={Products} />
        <Route path='/pedidos' component={Requests} />
        <Route path='/lojas' component={OurStores} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
