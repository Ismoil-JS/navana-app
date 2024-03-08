import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Banner from '../../components/banner/Banner'
import About from '../../components/about/About'
import Payment from '../../components/payment/Payment'

const Main = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About  />
      <Payment />
    </>
  )
}

export default Main