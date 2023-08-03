import {ProductCard} from "../components"
import { useTitle } from "../hooks/useTitle"

export const Home = () => {

    useTitle("Home")
    const products = [
        {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 14900, "image": "/assets/images/image1.jpg"},
        {"id": 2, "name": "boAt Rockerz 450", "price": 4900, "image": "/assets/images/image2.jpg"},
        {"id": 3, "name": "JBL Tune 760NC", "price": 17900, "image": "/assets/images/image3.jpg"},
        {"id": 4, "name": "Logitech H111 Wired", "price": 3900, "image": "/assets/images/image4.jpg"},
        {"id": 5, "name": "APPLE  Max Bluetooth Headset", "price": 19900, "image": "/assets/images/image5.jpg"},
        {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 2900, "image": "/assets/images/image6.jpg"}
      ]
      function handleClick(){
        console.log("clicked")
      }
  return (
    <main>
        <section className="products">
            {products.map((product) => {
                return <ProductCard key={product.id} product={product} handleClick= {handleClick} />
            })}
        </section>
    </main>
  )
}
