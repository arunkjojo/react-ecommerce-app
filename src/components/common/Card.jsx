import style from "./Card.module.css";
import cartIcon from "../../img/icons/cartIcon.svg";
import favoriteIcon from "../../img/icons/favoriteIcon.svg";
import shareIcon from "../../img/icons/shareIcon.svg";

const Card = ({ data }) => {
  return (
    <div className={style.productCard}>
      {data.badge && (
        <div className={style.badge}>
          <p className={style.badgeText}>{data?.badgeText}</p>
        </div>
      )}
      <div className={style.cardBody}>
        <div className={style.cardHeader}>
          <img src={favoriteIcon} className={style.icons} alt="Favourite" />
          <img src={shareIcon} className={style.icons} alt="Share" />
        </div>
        <div className={style.imageWrapper}>
          <img
            src={data?.image}
            alt="product img"
            className={style.cardImage}
          />
        </div>

        <div className={style.details}>
          <h2 className={style.cardTitle}>
            MB Fuel Whey Protein Immunity +2kg
          </h2>
          <del className={style.cardMrp}>MRP: ₹5,799</del>

          <div className={style.cardPriceSection}>
            <h1 className={style.cardPrice}>Price: ₹3,899</h1>
            <p className={style.cardPriceOffer}>32% OFF</p>
          </div>
        </div>

        <div className="d-grid">
          <div role="button" className={[style.cardBtn].join(" ")}>
            <img src={cartIcon} alt="Cart" className="img-fluid" />
            <span className={style.cardBtnText}> Add to Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
