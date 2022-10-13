import { useState } from 'react'
import MenuItem from '@/components/Layout/MenuItem'
import { menus } from '@/lib/menus'
import React from 'React'
const SideBar = () => {
  const [open, setOpen] = useState(true)
  const openHandler = () => {
    open ? setOpen(false) : setOpen(true)
  }
  return (
    <>
      <div className={`sidebar h-full shadow-md cursor-pointer`}>
        <div className="flex justify-center items-center h-12 mb-2 px-5">
          <div className={`overflow-hidden  ${open ? 'w-full' : 'w-0'}`}>歡迎光臨</div>
          <i onClick={openHandler} className="fa-solid fa-bars mt-1"></i>
        </div>

        <ul className={`overflow-hidden transition-all ${open ? 'w-40' : 'w-0 h-0 '}`}>
          {menus.map((menu, index) => (
            <MenuItem key={index} stage={1} menu={menu} index={index} />
          ))}
        </ul>
      </div>
    </>
  )
}
export default SideBar
