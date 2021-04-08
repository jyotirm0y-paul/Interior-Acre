import React, {useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


const Book = () => {
  const { id } = useParams();
  // console.log(id)

  const [checkOut, setCheckOut] = useState([])
  console.log(checkOut.length)
  useEffect(() => {
    fetch('https://shrouded-crag-66444.herokuapp.com/products')
    .then(res => res.json())
    .then(data => setCheckOut(data))
  }, [])

  const selected =checkOut.find(product =>product._id === id)
  
  return (

    <div style={{ textAlign: 'center' }}>

      <table class="table">
  <thead>
    <tr>
      <th scope="col">Products</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{selected?.name}</td>
      <td>1</td>
      <td>{selected?.price}</td>
    </tr>
  </tbody>
</table>

<button class="btn-primary"><Link to="/shipment" className="text-white">CheckOut</Link></button>
    </div>
  );
};

export default Book;