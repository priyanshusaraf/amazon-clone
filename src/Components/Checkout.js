import React from "react";
import "./checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { AnimatedList } from "react-animated-list";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2 className="checkout__title"> your shopping basket is empty!</h2>
            <p>
              you have no items in your shopping basket, to buy one or more
              items, click "Add To Basket next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">
              Hey {!user ? "Guest " : user.email}Your shopping cart:{" "}
            </h2>
            <AnimatedList animation={"zoom"}>
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </AnimatedList>
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
