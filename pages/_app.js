import '../styles/globals.css'
import Header from '../components/header/header'
import { useState, useEffect, useContext , createContext} from "react";
import Footer from '../components/footer/footer'
import Headerbox from '../components/header/headerbox.js'
export default function App({ Component, pageProps }) {  
  return(

    <div className='bg-black text-white   -z-50 py-8'>
   <Header/>
   <Headerbox/>
    <Component {...pageProps} />
    <Footer/>
    </div>
  

    )
    
}