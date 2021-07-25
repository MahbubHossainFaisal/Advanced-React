import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummy_products = [
  {id: 'p1', price: 600, title: 'My first book', description: 'The first book I ever read'},
  {id: 'p2', price: 700, title: 'My second book', description: 'The second book I ever read'},
  {id: 'p3', price: 800, title: 'My third book', description: 'The third book I ever read'}
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_products.map((product) => (<ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          
        />))}
      </ul>
    </section>
  );
};

export default Products;
