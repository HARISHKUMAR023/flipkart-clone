
import './App.css'
import ProductDetails from './pages/Productdetiles/ProductDetails';
import Home from './pages/Home/Home';
import Productes from './pages/Productes/Productes';
import Cart from './pages/Cart/Cart';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { useDispatch } from 'react-redux';
import Supabase from './subabase';
import { useEffect } from 'react';
import { setUser} from './slices/userSlices';
function App() {
const dispatch = useDispatch();
 const getuser =async ()=>{
  const {data , error} = await Supabase.auth.getSession();
  if(data.session){
    dispatch(setUser(data.session.user));
  }

};
useEffect(()=>{
  getuser();
},[]);

  return (
  
 <BrowserRouter>
<Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Productes/>}></Route>
      <Route path="/productdetails/:id" element={<ProductDetails />} />
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
  
   
    
  )
}

export default App
