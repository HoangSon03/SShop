import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Tổng tiền: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Tiếp tục mua sắm </button>
          <button
            onClick={() => {
              checkout();
              navigate("/cart");
            }}
          >
            {" "}
            Thanh toán{" "}
          </button>
        </div>
      ) : (
        <h1>Không có gì trong giỏ </h1>
      )}
    </div>
  );
};
