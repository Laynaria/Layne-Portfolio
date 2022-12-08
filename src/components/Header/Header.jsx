import { useState } from "react";
import burger from "../../assets/Burger.svg";
import cross from "../../assets/Cross.svg";

import "./Header.scss";

function Header() {
  const [isBurger, setIsBurger] = useState(false);

  const burgerHandler = () => {
    setIsBurger(!isBurger);
  };

  return (
    <header>
      <div id="burger">
        {isBurger ? (
          <img
            src={cross}
            alt="Burger Menu Icon Open"
            onClick={burgerHandler}
          />
        ) : (
          <img
            src={burger}
            alt="Burger Menu Icon Closed"
            onClick={burgerHandler}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
