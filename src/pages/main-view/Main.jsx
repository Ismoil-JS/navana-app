import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Banner from '../../components/banner/Banner'
import About from '../../components/about/About'
import Payment from '../../components/payment/Payment'
import Car from '../../components/cars/Car'
import News from '../../components/news/News'
import Footer from '../../components/footer/Footer'

const Main = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About  />
      <Payment />
      <Car />
      <News />
      <Footer />
    </>
  )
}

export default Main