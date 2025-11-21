
import {useCart} from '../context/CartContext'
const ProductCard = ({ product }) => {
   const {addToCart}=useCart();
    return (
      <div className="bg-blue-50 border w-1/5 m-2 text-center rounded-4xl shadow-xl bg-blue-100">
        <img className="w-full p-4 hover:scale-140 h-64" src={product.image} alt={product.name}  />
        <h2 className="font-bold text-2xl item-center">
          {product.name}
        </h2>
        <p >{product.description}</p>
        <p className="font-bold" >
          ₹{product.price}
        </p>
        <div className="p-4 mt-auto">
        <button className=" w-full border px-4 bg-blue-300 transition hover:bg-blue-400" 
        onClick={()=>addToCart(product)+alert('Added to cart')}>
          Add to cart
        </button>
        </div>
        
      </div>
    );
  };
  
  export default ProductCard;






