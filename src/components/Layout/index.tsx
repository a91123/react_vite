import Header from '@/components/Layout/Header'
import SideBar from '@/components/Layout/SideBar'
import React from 'react'
interface PropsType {
  children?: React.ReactNode
}
const LayOut = ({ children }: PropsType) => {
  return (
    <>
      <div className="flex h-full overflow-y-hidden">
        <SideBar />
        <div className=" relative w-full h-full overflow-y-auto">
          <Header /> {/* header 3 rem  */}
          <div className=" p-3 bg-gray-300  h-[calc(100%-3rem)] flex-1 ">
            <div className="p-4 bg-white overflow-y-auto rounded-lg h-full">{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default LayOut
