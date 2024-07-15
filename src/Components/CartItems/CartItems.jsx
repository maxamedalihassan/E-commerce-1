import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'


function CartItems() {
    const {getTotalCartAmount, all_product, cartItems, removeFromcart}= useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitem-format-main">
            <p>products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quentity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
       {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return <div>
                    <div className="cartitms-formed cartitem-format-main">
                        <img src={e.image} className='cartiocn-product-icon '  alt="" />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cart-icon-quentity'>{cartItems[e.id]}</button>
                        <p>${e.new_price*cartItems[e.id]}</p>
                        <img className='cartimes-remove-icon' src={remove_icon} onClick={()=>(removeFromcart(e.id))} alt="" />
                    </div>
                    <hr />
            
        </div>
        }
        return null;
       })}
       <div className="caritems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-totalitem">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />

                <div className="cartitems-totalitem" >
                    <p>Shipping fee</p>
                    <p>Fre</p>
                </div>
                <hr />

                <div className="cartitems-totalitem" >
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
            </div>
        </div>
        <button>PROCEED TO CHEKOUT</button>
       </div>
       
       <div className="cartitems-promocod">
        <p>if you Have a promo code enter hera?</p>
        <div className="cartimes-promobox">
            <input type="text" placeholder="Enter Your Promo Code" />
            <button>SUBMIT</button>
        </div>
       </div>
     </div>
    </div>
  )
}

export default CartItems