import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Admin = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const [imageURL, setImageURL] = useState(null);

  const onSubmit = data => {
    const eventData = {
      name: data.name,
      author: data.author,
      price: data.price,
      imageURL: imageURL
    }
    const url = `https://shrouded-crag-66444.herokuapp.com/addProducts`


    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => console.log('server side response'))
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', '05ad2e0d0ea25a1e4a93fb3ab79bc984');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (

    <div>
      <button className="btn-danger"><Link to="/manageProduct" className="text-white">Manage Product</Link></button>
      <div className="text-center">
        <form onSubmit={handleSubmit(onSubmit)}>

          <input name="name" placeholder="Enter Name" type="text" ref={register({ required: true })} />
          <br />
          <input name="author" placeholder="Enter Author Name" type="text" ref={register({ required: true })} />
          <br />
          <input name="price" placeholder="Enter Price" type="text" ref={register({ required: true })} />
          <br />
          <input name="example" type="file" onChange={handleImageUpload} />
          <br />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Admin;