import React, { useContext, useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import { MdDeleteOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import "./cart.scss";
import { FaMinus } from "react-icons/fa6";
import { CartItemsContext } from "../../Context/CartContext";

const Cart = ({ open, setOpen }) => {
  const { cartItems, setCartItems } = useContext(CartItemsContext);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const subAmount = cartItems.reduce(
    (total, obj) => total + obj.qty * obj.price,
    0
  );
  const salesTax = subAmount * 0.02;
  const discount = subAmount > 1000 && subAmount * 0.10;
  const shippingCharges = subAmount < 2000 && subAmount * 0.10;
  const grandTotal = subAmount + salesTax + shippingCharges - discount ;
  
  return (
    <>
      <Drawer
        title="Cart"
        placement={placement}
        closable={true}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <div className="flex flex-col">
          <div className="grow">
            {cartItems.map((res,index) => {
              return (
                <div key={index} className="mb-3 shadow">
                  <div className="cart-content flex justify-between">
                    <div className="cart-img">
                      <img src={res.thumbnail} className="w-full" alt="" />
                    </div>
                    <div className="cart-detail p-2">
                      <h2>{res.title}</h2>
                      <h5>{`$ ${res.price}`}</h5>
                      <div className="cart-btn">
                        <Button className="btn-icon">
                          <FaMinus />
                        </Button>
                        <div className="border px-4">{res.qty}</div>
                        <Button className="btn-icon">
                          <FaPlus />
                        </Button>
                      </div>
                    </div>
                    <div className="cart-delete-btn">
                      <MdDeleteOutline className="cart-delete-icon" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`cart-invoice bg-white ${!cartItems.length && "hidden"}`}>
            <div className="border-b flex justify-between leading-8">
              <h3 className="font-bold">Subtotal</h3>
              <h3 className="font-bold">{`$ ${Math.round(subAmount)}`}</h3>
            </div>
            <div className="border-b flex justify-between leading-8">
              <h3 className="font-bold">Sales Tax</h3>
              <h3 className="font-bold">{`$ ${Math.round(salesTax)}`}</h3>
            </div>
            <div className="border-b flex justify-between leading-8">
              <h3 className="font-bold">Discount</h3>
              <h3 className="font-bold">{`$ ${Math.round(discount)}`}</h3>
            </div>
            <div className="border-b flex justify-between leading-8">
              <h3 className="font-bold">Shipping Charges</h3>
              <h3 className="font-bold">{`$ ${Math.round(shippingCharges)}`}</h3>
            </div>
            <div className="border-b flex justify-between leading-8">
              <h3 className="font-bold">Grand Total</h3>
              <h3 className="font-bold">{`$ ${Math.round(grandTotal)}`}</h3>
            </div>

            <Button className="w-full mt-2"> Checkout</Button>
          </div>

        </div>
      </Drawer>
    </>
  );
};

export default Cart;
