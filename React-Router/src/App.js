
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Products from './pages/Products';
import Welcome from './pages/Welcome';


function App() {
  return (
    <div>
      <header>
        <Header />
       </header>
       <main>
        <Route path='/welcome'>
          <Welcome />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
       </main>
       <footer>
         
       </footer>
      
    </div>
  );
}

export default App;
