import React from 'react'
import { Link } from 'react-router-dom'
const Products = () => {
    return (
        <div>
          <h1>The Products Page</h1> 
            <section>
                <ul>
                    <li><Link to='/products/p1'>A Laptop</Link></li>
                    <li><Link to='/products/p2'>An Smartphone</Link></li>
                    <li><Link to='/products/p3'>A Camera</Link></li>
                </ul>
            </section>
        </div>
    )
}

export default Products
