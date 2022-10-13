import React, { useState } from 'react'
import { Menu } from '@/lib/menus'
interface PropsType {
    menu: Menu
    index?: number
    stage?: number
}
const MenuItem: React.FC<PropsType> = (props) => {
    const { menu, stage } = props
    const [open, setOpen] = useState(false)
    const toggleOpen = () => open ? setOpen(false) : setOpen(true)
    const isActive = open && 'subs' in menu
    return (
        <>
            <div
                onClick={toggleOpen}
                className={`h-12 p-2  flex justify-between hover:bg-slate-500 ${isActive && 'active'}`}
            >
                <span className={`transition-all ${stage === 1 ? 'ml-0' : 'ml-4'}`}>{menu.label}</span>
                {menu.subs && <i className={`fa-solid fa-chevron-${open ? 'up' : 'down'}`}></i>}
            </div>
            {menu.subs &&
                menu.subs.map((sub, index) => (
                    <ul key={index} className={`max-h-0 overflow-hidden transition-all ${open && 'show'}`}>
                        <MenuItem stage={2} key={index} menu={sub}></MenuItem>
                    </ul>
                ))
            }
        </>
    )
}
export default MenuItem
