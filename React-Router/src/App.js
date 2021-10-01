
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Welcome from './pages/Welcome';


function App() {
  return (
    <div>
      <header>
        <Header />
       </header>
       <main>
        <Switch>
          <Route path='/' exact> 
            <Redirect to='/welcome' />
          </Route>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:product_id'>
            <ProductDetails />
          </Route>
        </Switch>
       </main>
       <footer>

       </footer>
      
    </div>
  );
}

export default App;
