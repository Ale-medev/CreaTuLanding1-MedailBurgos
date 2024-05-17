
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { ContextProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import CheckOut from './components/CheckOut/CheckOut'


function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer  greeting='Biemvenido'/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer  greeting='Biemvenido'/>} />
            <Route path='/product/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  )
}

export default App


