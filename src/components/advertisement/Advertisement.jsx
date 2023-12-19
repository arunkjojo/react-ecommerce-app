import style from "./Advertisement.module.css";
import vitamin from "../../img/common/vitamin.png";
import rightArrow from "../../img/icons/rightArrow.svg";
import StyledButton from "./../common/StyledButton";

const Advertisement = () => {
  return (
    <div className={style.ads}>
      <div className="container">
        <div className={[style.adsInnerDiv, "d-flex"].join(" ")}>
          <div className={style.content}>
            <h2 className={style.heading}>
              Best deals for{" "}
              <span className={style.headingHighlight}>Vitamin Tablets</span>
            </h2>

            <p className={style.paragraph}>
              In publishing and graphic design, Lorem ipsum is a placeholder
            </p>

            <StyledButton
              size={"large"}
              text={"Proceed to order"}
              extraChild={
                <img
                  className={style.arrowRight}
                  alt="arrowRight"
                  src={rightArrow}
                />
              }
            />
          </div>
          <div className={style.image}>
            <img className="img-fluid" alt="vitamin" src={vitamin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
