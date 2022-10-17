import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { useState } from 'react'
const Home = () => {
  const pictures = [
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F06%2F14%2Fsiberian-husky-puppy-grass-146571433-2000.jpg',
    'https://d.newsweek.com/en/full/2112338/close-view-siberian-husky.jpg',
  ]
  const [active, setActive] = useState(0)
  return (
    <>
      <button onClick={() => setActive(active - 1)}>上一步</button>
      <button onClick={() => setActive(active + 1)}>下一步</button>
      <div className="flex relative overflow-hidden">
        {pictures.map((src, index) => {
          {
            return (
              <img
                className={`translate-x-[${active * -100}%] transition-all w-full h-[300px] flex-shrink-0 object-cover`}
                src={src}
              />
            )
          }
        })}
      </div>
    </>
  )
}
export default Home
