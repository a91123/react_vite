import React, { useState } from 'react'
interface PropType {
  children: React.ReactNode
}
const Carousel = ({ children }: PropType) => {
  const [active, setActive] = useState(0)
  return (
    <>
      <div className="flex relative w-full overflow-hidden">
        {React.Children.map(children, (child) => {
          return <div className="w-full flex-shrink-0">{child}</div>
        })}
      </div>
    </>
  )
}
export default Carousel
