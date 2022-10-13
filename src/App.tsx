import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Layout from './components/Layout'
import { render } from "react-dom";
import ProductList from '@/pages/ProductList'
import Home from '@/pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout >
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/product-list' element={<ProductList />}></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </>

  )
}

export default App
