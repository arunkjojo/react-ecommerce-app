import style from "./Slider.module.css";
import SliderImg from "../../img/common/slider_img.png";
import SliderDot from "../../img/common/slider_dots.png";
import StyledButton from "../common/StyledButton";
const Slider = () => {
  return (
    <>
      <div className={style.sliderDiv}>
        <div className="container">
          <div className={style.sliderInnerDiv}>
            <div className={style.contents}>
              <h2 className={style.heading2}>WORKOUT ESSENTIAL</h2>
              <h2 className={style.heading2}>SUPPLEMENTS</h2>
              <p className={style.para}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface.
              </p>

              <div className={style.btn}>
                <StyledButton
                  style={{ boxShadow: " -1px 10px 30px -10px #afafa8" }}
                  text={"Buy Now"}
                  size={"large"}
                />
              </div>
            </div>
            <div className={style.sliderImageDiv}>
              <img
                className={style.sliderImg}
                alt="SliderImg"
                src={SliderImg}
              />
              <div className={style.sliderImgShadow} />
            </div>
          </div>
          <div className={style.bgChecks} />
        </div>
      </div>
      <div className={style.sliderDots}>
        <img src={SliderDot} alt="Slider Dots" />
      </div>
    </>
  );
};

export default Slider;
