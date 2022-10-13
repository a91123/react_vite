import Layout from './components/Layout'
import ProductList from '@/pages/ProductList/ProductList'
import Home from '@/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from './lib/routes'
function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <>
              {routes.map(({ path, element }, index) => {
                return <Route key={index} path={path} element={element}></Route>
              })}
            </>
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  )
}

export default App
