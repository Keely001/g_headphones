import {Routes, Route} from 'react-router-dom'
import { Home, Cart } from '../pages'

export const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </>
  )
}
