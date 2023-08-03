import {CartCard} from '../components'
import { useTitle } from '../hooks/useTitle'

export const Cart = () => {
  useTitle("Cart")
  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 14900, "image": "/assets/images/image1.jpg"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 4900, "image": "/assets/images/image2.jpg"}
  ]

  return (
    <main>
      <section className='cart'>
      <h1>Cart Items: {products.length}</h1>
      {products.map((product) => (
        <CartCard key={product.id} product= {product}/>
      ))}

      </section>
    </main>
  )
}
 