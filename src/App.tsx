
import './App.css'
import Productdetials from './pages/Productdetiles/Productdetials';
import Home from './pages/Home/Home';
import Productes from './pages/Productes/Productes';
import Cart from './pages/Cart/Cart';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
function App() {


  return (
    <>
    <BrowserRouter>
<Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Productes/>}></Route>
      <Route path='/productsdetials/:id' element={<Productdetials/>}></Route>
      <Route path='/card' element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
