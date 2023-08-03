import "./ProductCard.css"

export const ProductCard = ({product, handleClick}) => {
    const { name, price, image} = product;

  return (
    <div className="productCard" >
        <img src={image} alt=""/>
        <p className="name">{name}</p>
        <div className="action">
            <p> Ksh.{price} only!!</p>
            <button onClick= {handleClick}>Add to Cart</button>
        </div>
    </div>
  )
}
