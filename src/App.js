import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {CartProvider} from './context/CartContext'
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>

          <Routes>
            <Route path='/ecommerce_aquadot' element={<ItemListContainer />} />
            <Route path='/ecommerce_aquadot/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/ecommerce_aquadot/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/ecommerce_aquadot/cart' element={<Cart/>} />
            <Route path='/ecommerce_aquadot/checkout' element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>

      

    </div>
  );
}

export default App;
