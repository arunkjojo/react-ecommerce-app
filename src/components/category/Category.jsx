import { cat1, cat2, cat3, cat4 } from "../../img/categories";
import style from "./Category.module.css";

const CategoryCard = ({ name, image, bg }) => {
  return (
    <div style={{ backgroundColor: `#${bg}` }} className={style.categoryCard}>
      <h5 className={style.categoryName}>{name}</h5>
      <div className={style.images}>
        <img src={image} alt={image} className={style.categoryImage} />
      </div>
    </div>
  );
};
const Category = () => {
  return (
    <div className={style.category}>
      <div className="container">
        <div className={style.categoryHeader}>
          <p className={style.label}>Top Category's</p>
          <p className={style.viewText}>View All</p>
        </div>
        <div className="row pt-2">
          <div className="col-3">
            <CategoryCard name={"Vitamins"} image={cat2} bg={"EBF8E6"} />
          </div>
          <div className="col-3">
            <CategoryCard name={"Medicine"} image={cat3} bg={"FFE8ED"} />
          </div>
          <div className="col-3">
            <CategoryCard name={"Home Healthcare"} image={cat1} bg={"E5EDFA"} />
          </div>
          <div className="col-3">
            <CategoryCard
              name={"Fish Oil & Omega"}
              image={cat4}
              bg={"FFEFB6"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
