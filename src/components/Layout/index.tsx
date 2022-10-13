import Header from '@/components/Layout/Header'
import SideBar from '@/components/Layout/SideBar'
import React from 'react'
interface PropsType {
    children?: React.ReactNode
}
const LayOut: React.FC<PropsType> = ({ children }) => {
    return <>
        <div className='flex h-full' >
            < SideBar />
            <div className='flex-1'>
                < Header />
                {children}
            </div>
        </div >
    </>
}
export default LayOut