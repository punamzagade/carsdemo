
import React from 'react'
import Footer from './components/footer/Footer';
import { Homemain } from './components/homemain/Homemain'
import Middl from './components/mid/Middl';
import Header from './components/nav/Header'
import "./home.css";

const Home = () => {
  return (
    <div className='maincont'>
      <div className="cont">
      <Header/>
      <Homemain/>
      </div>
      <Middl/>
      <Footer/>
      </div>
  )
}

export default Home