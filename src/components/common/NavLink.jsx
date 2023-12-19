import DownArrow from "../../img/icons/downArrowIcon.svg";
import style from "./NavLink.module.css";

const NavLink = ({ text, arrow }) => {
  return (
    <div className={style.groupLink}>
      <div className={style.linkText}>{text}</div>
      {arrow && (
        <img className={style.downArrow} alt="DownArrow" src={DownArrow} />
      )}
    </div>
  );
};

export default NavLink;
