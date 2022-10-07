

import React, { useState } from 'react'
import { Menu } from '@/lib/menus'
interface Props {
    menu: Menu
}
function MenuItem(props: Props) {
    const { menu } = props
    const [open, setOpen] = useState(false)
    const toggleOpen = () => {
        open ? setOpen(false) : setOpen(true)
    }
    return <>
        <div onClick={toggleOpen} className='h-12 p-2 flex justify-between  hover:bg-slate-500 bg-white'>
            <span>{props.menu.label}</span>
            {menu.subs && <i className="fa-solid fa-chevron-down"></i>}
        </div>
        {menu.subs && menu.subs.map((sub, index) =>
            <ul className={`ml-4 overflow-hidden ${!open && 'max-h-0'}`}>
                <MenuItem key={index} menu={sub}></MenuItem>
            </ul>

        )}
    </>
}
export default MenuItem