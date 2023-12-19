import style from "./Footer.module.css";
import logo from "../../img/common/dexa-footer-logo.png";
import facebook from "../../img/icons/facebook-fill.svg";
import twitter from "../../img/icons/twitter-fill.svg";
import youtube from "../../img/icons/youtube-fill.svg";
import telegram from "../../img/icons/telegram-fill.svg";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className={[style.bgImg].join(" img-fluid")}>
          <div className={[style.footerInnerDiv, ""].join(" ")}>
            <div className={[style.content, ""].join(" ")}>
              <div className={style.logo}>
                <img src={logo} alt="Logo" className={style.logoImg} />
                <span className={style.logoText}>Site Name</span>
              </div>
              <p className={style.para}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="d-flex">
                <div className={style.socialMedia}>
                  <img src={facebook} className={style.icons} alt="Facebook" />
                </div>
                <div className={style.socialMedia}>
                  <img src={twitter} className={style.icons} alt="Twitter" />
                </div>
                <div className={style.socialMedia}>
                  <img src={youtube} className={style.icons} alt="Youtube" />
                </div>
                <div className={style.socialMedia}>
                  <img src={telegram} className={style.icons} alt="Telegram" />
                </div>
              </div>
            </div>

            <div className={[style.content, ""].join(" ")}>
              <h5 className={style.heading}>Customer Support</h5>
              <ul className="list-unstyled">
                <li className={style.items}>Returns & Warranty</li>
                <li className={style.items}>Payments</li>
                <li className={style.items}>Shipping</li>
                <li className={style.items}>Terms and Services</li>
                <li className={style.items}>Privacy Policy</li>
              </ul>
            </div>
            <div className={[style.content, ""].join(" ")}>
              <h5 className={style.heading}>Corporate Info</h5>
              <ul className="list-unstyled">
                <li className={style.items}>About Us</li>
                <li className={style.items}>Brands</li>
                <li className={style.items}>Investors</li>
                <li className={style.items}>Cookies</li>
              </ul>
            </div>
            <div className={[style.content, ""].join(" ")}>
              <h5 className={style.heading}>Gift Card</h5>
              <ul className="list-unstyled">
                <li className={style.items}>Buy Gift Cards</li>
                <li className={style.items}>Redeem Card</li>
              </ul>
            </div>
            <div className={[style.content, ""].join(" ")}>
              <h5 className={style.heading}>Location</h5>
              <ul className="list-unstyled">
                <li className={style.items}>United State</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
