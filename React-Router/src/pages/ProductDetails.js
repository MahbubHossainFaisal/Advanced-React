import React from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {

    const param = useParams()

    return (
        <div>
            <h1>Product Details</h1>
            <p>{param.product_id}</p>
        </div>
    )
}

export default ProductDetails
