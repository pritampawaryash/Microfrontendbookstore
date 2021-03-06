import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import CardPage from './card-page';

import './home.module.scss';

import img1 from './thrones.jpg';

import img2 from './fire.jpg';

import img3 from './Crows.jpg';

import img4 from './Dragons.jpg';

import img5 from './kings.jpg';

import img6 from './door.jpg';

import img7 from './author.jpg';
import img8 from './stephan.jpg';

const Home = ({ handleClick }) => {
  const books = [
    {
      id: 1,

      title: 'A Game of thrones',

      img: img1,

      price: 60,

      amount: 1,
    },

    {
      id: 2,

      title: 'Fire and Blood',

      img: img2,

      price: 70,

      amount: 1,
    },

    {
      id: 3,

      title: 'A Feast for crows',

      img: img3,

      price: 60,

      amount: 1,
    },

    {
      id: 4,
      title: 'A Dance with dragons',
      img: img4,
      price: 70,
      amount: 1,
    },
    {
      id: 5,
      title: 'A Clash of kings',
      img: img5,
      price: 60,
      amount: 1,
    },

    {
      id: 6,
      title: 'Lock every door',
      img: img6,
      price: 70,
      amount: 1,
    },
    {
      id: 7,
      title: 'The Author',
      img: img7,
      price: 70,
      amount: 1,
    },
    {
      id: 8,
      title: 'Stephan Kings',
      img: img8,
      price: 70,
      amount: 1,
    },
  ];
  return (
   <div className="container">
    <section className='container-fluid ' >
      {books.map((item) => (
        <CardPage key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
    </div>
  );
};

export default Home;
