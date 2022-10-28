import ProductList from '@/pages/ProductList/ProductList'
import Home from '@/pages/Home'
import React from 'react'
import { useRoutes } from 'react-router-dom'
interface Routes {
  path: string
  element: React.ReactNode
  breadcrumbName: string
}
const routes: Routes[] = [
  {
    path: '/',
    element: <Home />,
    breadcrumbName: 'Home',
  },
  {
    path: '/product-list',
    element: <ProductList />,
    breadcrumbName: 'Product',
  },
]
export default routes
