import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      {/* this is the amazon logo */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      {/* searchbox */}
      <div className="header__search">
        <input className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 links */}

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">
              hello {!user ? "Guest" : user.email}{" "}
            </span>
            <span className="header__optionLineTwo">sign in</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">returns </span>
            <span className="header__optionLineTwo">and orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">your</span>
            <span className="header__optionLineTwo">prime</span>
          </div>
        </Link>
      </div>
      {/* basket icons with number  */}
      <Link to="/checkout">
        <div className="header__optionBasket">
          {/* shopping basket icon */}
          <ShoppingBasketIcon />
          {/* number of items in the basket */}
          <span className="header__optionLineTwo">{basket?.length}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
