import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
  // console.log(product)
  return (
    
    <>
     <div className="col-lg-4 col-md-6 col-sm-12">
     <div class="card mb-4">
  <img src={product.imageURL} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{product.name}</h5>
    <p class="card-text">{product.author}.</p>
    <h5 class="card-title">{product.price}</h5>
    <Link to={`/book/${product._id}`} class="btn btn-primary">Buy Now</Link>
  </div>
</div>
     </div>

    </>



  );
};

export default Product;