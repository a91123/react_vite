import Header from '@/components/Layout/Header'
import SideBar from '@/components/Layout/SideBar'
function Layout() {
    return <>
        <div className='flex h-full'>
            < SideBar />
            <div className='flex-1'>
                < Header />
              {/* TODO ROUTER */}
            </div>
        </div>
    </>
}
export default Layout