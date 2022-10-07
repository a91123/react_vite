import { useState } from 'react'
import MenuItem from '@/components/Layout/MenuItem'
import { menus } from '@/lib/menus'
function SideBar() {
    const [open, setOpen] = useState(true)
    const openHandler = () => {
        open ? setOpen(false) : setOpen(true)
    }
    return (
        <>
            <div className={`h-full shadow-md ${open ? 'w-40' : 'w-[30px]'} cursor-pointer`}>
                <div className="flex justify-between h-12 items-center p-1">
                    <span className={`${!open && 'hidden'}`}>歡迎光臨</span>
                    <i onClick={openHandler} className={`fa-solid fa-chevron-${open ? 'left' : 'right'}  mr-2 mt-2`}>
                    </i>
                </div>

                <ul className={`overflow-hidden ${open ? 'w-full' : 'w-0'}`}>
                    {menus.map(menu => <MenuItem menu={menu} />)}
                </ul>
            </div>
        </>
    )
}
export default SideBar
