import React from "react";
import "./CheckoutProduct.css";
import Button from "react-bootstrap/Button";
import { useStateValue } from "./StateProvider.js";
import FlipMove from "react-flip-move";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();
  function removeFromBasket() {
    //removing an item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  }
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          <small></small>
          <strong>{title}</strong>
        </p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <Button
          onClick={removeFromBasket}
          className="checkoutProduct__button"
          variant="warning"
          size="sm"
        >
          Remove from basket
        </Button>
        <hr color="white" className="hr" />
      </div>
    </div>
  );
}

export default CheckoutProduct;
