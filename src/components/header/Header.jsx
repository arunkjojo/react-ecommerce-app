import style from "./Header.module.css";
import Logo from "../../img/common/logo.png";
import RightUpArrow from "../../img/icons/rightUpArrow.svg";
import CartIcon from "../../img/icons/cartIcon.svg";
import HeartIcon from "../../img/icons/heartIcon.svg";
import LineIcon from "../../img/icons/lineIcon.svg";
import SearchIcon from "../../img/icons/searchIcon.svg";

import StyledButton from "../common/StyledButton";

const Header = () => {
  return (
    <div className={style.header}>
      <div className="container">
        <div className={style.innerHeader}>
          <div className={style.logoDiv}>
            <img className={style.logo} alt="Dexa Logo" src={Logo} />
          </div>
          <div className={style.rightDiv}>
            <div className={style.inputOuterDiv}>
              <img className={style.searchIcon} alt="Search" src={SearchIcon} />
              <input
                type="text"
                className={style.textInput}
                placeholder="Search for Products"
              />
            </div>

            <img className={style.verticalLine} alt="Line" src={LineIcon} />

            <img className={style.icon} alt="heartIcon" src={HeartIcon} />

            <img className={style.icon} alt="cartIcon" src={CartIcon} />

            <StyledButton
              text={"Get Start"}
              extraChild={
                <img
                  className={style.arrowRightUp}
                  alt="arrowRightUp"
                  src={RightUpArrow}
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
