import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('https://shrouded-crag-66444.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, [])
    return (
        <div className="bg-info " >
            <div className="container">
            <div className="row d-flex py-5">
                {
                    products.length === 0 && <div class="spinner-border text-danger text-center" role="status">
                    <span class="visually-hidden"></span>
                  </div>
                }
            {
                products.map(product =><Product product={product}></Product>)
            }
            </div>
            </div>
            
            
        </div>
    );
};

export default Home;