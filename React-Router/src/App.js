
import { Route, Switch,Redirect } from 'react-router-dom';
import Header from './components/Header';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

/*
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

*/

import React,{useReducer,useEffect} from 'react'


const initialState = {
  loading: true,
  post: {},
  error: ''
}

const reducer = (state,action) =>{
  switch(action.type){
    case 'success':
      return {
        loading:false,
        post: action.result,
        error: '',
      }
    case 'failure':
      return{
        loading: false,
        post:{},
        error: 'There was some error while fetching!'
      }
      default:
        return state
  }
}
function App() {
  const [state,dispatch] = useReducer(reducer,initialState)

  useEffect(()=>{
    
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => dispatch({type:'success', result:data}))
    .catch(()=>{
      dispatch({type:'failure'})
    })
  },[])
  return (
    <div>
     {state.loading ? 'loading...' : state.post.title}
     {state.error ? state.error : null}
    </div>
  );
}

export default App;
