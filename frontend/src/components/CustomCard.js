import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const CustomCard = ({ product }) => {
  return (
    <div >
      <div className="block-7">
        <div className="text-center">
          <Link to={`/product/${product._id}`}>
            <img className="img-fluid" src={product.image} alt='prod'/>
          </Link>
          <Link to={`/product/${product._id}`}>
            <h4 className="h4 pt-4" style={{ 'color': 'black', 'fontWeight': '500' }}><strong>{product.name}</strong></h4>
          </Link>
          <div>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
          </div>
          <h3>&#x20A6; {product.price}</h3>
        </div>
      </div>
    </div>
  )
}

export default CustomCard
