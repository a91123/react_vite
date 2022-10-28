import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { productList } from '@/lib/mockData'
import Product from '@/components/Product/index'
const Home = () => {
  return (
    <>
      <ul className="grid grid-cols-5 gap-4">
        {productList.coat.map((coat, index) => {
          return (
            <li key={index}>
              <Product.Box name={coat.name} img={coat.img} price={coat.price}></Product.Box>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default Home
