import Card from "../common/Card";
import style from "./NewProduct.module.css";

const NewProduct = (props) => {
  return (
    <div className={style.newProduct}>
      <div className="container">
        <div className={style.newProductHeader}>
          <p className={style.label}>{props.label}</p>
          <p className={style.viewText}>View All</p>
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

export default NewProduct;
