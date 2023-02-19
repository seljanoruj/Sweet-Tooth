import React from "react";
import { useCart } from 'react-use-cart'
import { toast } from 'react-toastify';
import AOS from "aos";
import { useEffect } from 'react';

const Cart = () => {

  const { isEmpty, items, removeItem, updateItemQuantity, cartTotal } = useCart();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      {isEmpty ? (
        <div className="cart d-flex justify-content-center">
          <h3 style={{ fontWeight: "bold" }}>Your cart is empty {items.length}</h3>
        </div>
      ) : (
        <div className="Cart">
          <div className="cart-main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 ">
                  <table>
                    <thead>
                      <tr data-aos="fade-right">
                        <th></th>
                        <th>
                          <h1>PHOTO</h1>
                        </th>
                        <th>
                          <h1>PRODUCT NAME</h1>
                        </th>
                        <th>
                          <h1>PRICE</h1>
                        </th>
                        <th>
                          <h1>QUANTITY</h1>
                        </th>
                        <th>
                          <h1>TOTAL</h1>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, index) => {
                        return (
                          <>
                            <tr key={item.id} data-aos="fade-left">
                              <td>
                                <i
                                  class="fa-solid fa-xmark"
                                  onClick={() => {
                                    removeItem(item.id)
                                    toast.warning('Product was deleted')
                                  }}
                                > </i>
                              </td>
                              <td>
                                <img src={item.img} alt="" />
                              </td>
                              <td>
                                <p>{item.title}</p>
                              </td>
                              <td>
                                <p>{item.price}$</p>
                              </td>
                              <td>
                                <div className="count-button">
                                  <span
                                    onClick={() =>
                                      updateItemQuantity(
                                        item.id,
                                        item.quantity - 1
                                      )
                                    }
                                  >
                                    -
                                  </span>
                                  <span>{item.quantity}</span>
                                  <span
                                    onClick={() =>
                                      updateItemQuantity(
                                        item.id,
                                        item.quantity + 1
                                      )
                                    }
                                  >
                                    +
                                  </span>
                                </div>
                              </td>
                              <td>
                                <p>{item.quantity * item.price}$</p>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="col-lg-12">
                  <div className="total d-flex justify-content-between" style={{ padding: ' 20px 70px '}}>
                    <h3>Subtotal : {cartTotal}$</h3>
                    <button className="btn">Buy Now</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;