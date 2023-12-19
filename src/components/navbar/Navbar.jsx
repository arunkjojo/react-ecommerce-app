import NavLink from "../common/NavLink";
import style from "./Navbar.module.css";

const Navbar = () => {
  const navLinks = [
    {
      link: "Best Sellers",
      arrow: false,
    },
    {
      link: "Products",
      arrow: true,
    },
    {
      link: "Brand",
      arrow: true,
    },
    {
      link: "Outlet",
      arrow: true,
    },
    {
      link: "Offers",
      arrow: false,
    },
    {
      link: "Our Story",
      arrow: false,
    },
  ];
  return (
    <div className="container">
      <div className={style.navbar}>
        {navLinks.map((data, index) => (
          <NavLink key={index} text={data.link} arrow={data.arrow} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
