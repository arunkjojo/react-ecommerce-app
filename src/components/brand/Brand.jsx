import style from "./Brand.module.css";
import { ads1, ads2, ads3, ads4, ads5, ads6 } from "../../img/brand";
const Ads = () => {
  return (
    <div className={style.brandContainer}>
      <div className={style.brandInnerContainer}>
        <div className="container">
          <h4 className={style.brandText}>Shop by Brand</h4>
          <div className="row gx-4 gy-4">
            <div className="col-4">
              <img src={ads1} alt="green" className="img-fluid" />
            </div>
            <div className="col-4">
              <img src={ads2} alt="fitfoods" className="img-fluid" />
            </div>
            <div className="col-4">
              <img src={ads3} alt="fuelone" className="img-fluid" />
            </div>
            <div className="col-4">
              <img src={ads4} alt="fuelone_bw" className="img-fluid" />
            </div>
            <div className="col-4">
              <img src={ads5} alt="muscleblaze" className="img-fluid" />
            </div>
            <div className="col-4">
              <img src={ads6} alt="muscleblaze_bw" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
