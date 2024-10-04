import React from 'react';
import './home.scss';
import header from '../images/header.png'

export const Home = () => {
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${header})`}}></header>
    </div>
  );
};
