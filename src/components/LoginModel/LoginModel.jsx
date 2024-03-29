import { useState } from 'react'
import './LoginModel.css';
import { RxCross2 } from 'react-icons/rx';
import subabase from "../../subabase";
import { useDispatch } from 'react-redux';
import { setUser } from '../../slices/userSlices';

const LoginModel = ({isOpen , setIsOpen}) => {
    const [ email , setEmail] = useState("");
    const [password , setPassword ] = useState("");
    const [loginType , setLoginType] = useState(true);
    const dispatch = useDispatch();

const Signup = async ()=>{

  const {data , error }= await subabase.auth.signUp({
    email,
    password,
  });
 if(data.user){
  alert("User is created.Please verify your email. ")
 }else{
  alert(error?.message)
 }
};

const login = async ()=>{
  const {data, error } = await subabase.auth.signInWithPassword({
    email,
    password,
  });
  if(error){
    alert(error?.message)
  }
  dispatch(setUser(data.user))

return  
  // alert(error?.message)
  // console.log(data,error)
}



  return isOpen ? (
    <div className='overlay'>
  <div className="LoginModel">
    <div className="left">

        <div className="left-container">
            <p  className="Login-title">Login</p>
            <p className="Login-des">
                Get access to your orders , wishlist and Recommendated
            </p>
        </div>
    </div>
    <div className='right'>
        <input 
        type="email"
         className='Login-input'
          placeholder='Enter Email' 
          required value={email} 
          onChange={(e)=>setEmail(e.target.value)} />

        <input type="password" 
        name="Password"
         className='Login-input'
          placeholder='Enter Password'
         value={password} onChange={(e)=>setPassword(e.target.value)} id="" />

  <p className="termsandcon">
    By continuing , you agree to Flipkart's{""}
    <span style={{color:"blue"}}>Terms of Use</span>
    <span style={{color:"blue"}}>Privacy Policy</span>
  </p>
  {
    loginType ? (
        <button className="Login-btn" onClick={login}>Login</button>
    ):(
        <button className="Login-btn" onClick={Signup}>Signup</button>
    )}

    {
        loginType ? ( 
            <p className='Login-signup' onClick={()=>setLoginType(false)}>
                New to Flipkart ? Create an account
            </p>
        ):(
            <p className="Login-signup" onClick={()=> setLoginType(true)}>
                Already an user? Login to an account
            </p>
        )
    }
    </div>
    <div className="close" onClick={()=>{setIsOpen(false)}}>
      <RxCross2/>
    </div>

  </div>
    </div>
  ): ( <></>);
}

export default LoginModel