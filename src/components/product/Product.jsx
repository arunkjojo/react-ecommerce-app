import { useState } from "react";
import Card from "../common/Card";
import style from "./Product.module.css";
import StyledSwitch from "../common/StyledSwitch";

const Product = (props) => {
  const [switchValue, setSwitchValue] = useState(false);

  const handleSwitchChange = () => {
    setSwitchValue(!switchValue);
  };
  return (
    <div className={style.product}>
      <div className="container">
        <div className={style.productHeader}>
          <p className={style.label}>{props.label}</p>
          <p className={style.viewText}>View All</p>
        </div>
        <div className={style.switchDiv}>
          <StyledSwitch
            label="Best Sellers"
            checked={!switchValue}
            onChange={handleSwitchChange}
          />
          <StyledSwitch
            label="Category’s"
            checked={switchValue}
            onChange={handleSwitchChange}
          />
        </div>
        <div className="row mt-1 gx-4 gy-4">
          {props.data &&
            props.data?.map((product, index) => (
              <div key={index} className="col-3">
                <Card key={index} data={product} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
