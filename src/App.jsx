import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";
import Category from "./components/category/Category";
import Product from "./components/product/Product";
import Advertisement from "./components/advertisement/Advertisement";
import NewProduct from "./components/newProduct/NewProduct";
import Brand from "./components/brand/Brand";
import Subscribe from "./components/subsription/Subscribe";
import Footer from "./components/footer/Footer";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/productSlice";
import { fetchNewProducts } from "./store/newProductSlice";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const newProducts = useSelector((state) => state.newProduct);

  useEffect(() => {
    if (products.status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.status]);
  useEffect(() => {
    if (newProducts.status === "idle") {
      dispatch(fetchNewProducts());
    }
  }, [dispatch, newProducts.status]);

  if (products.status === "loading") {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <h1>Loading...</h1>
      </div>
    );
  } else if (products.status === "failed") {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <h1>Error: Unable to fetch products </h1>
      </div>
    );
  }

  if (newProducts.status === "loading") {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <h1>Loading...</h1>
      </div>
    );
  } else if (newProducts.status === "failed") {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <h1>Error: Unable to fetch just launched products</h1>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <Navbar />
      <Slider />

      <Category />

      <Product data={products.items} label={"Popular"} />

      <Advertisement />

      <div style={{ background: "#F5FBFF", paddingBottom: "56px" }}>
        <NewProduct data={newProducts.items} label={"Just Launched"} />
      </div>

      <Brand />

      <Subscribe />
      <Footer />
    </div>
  );
};
export default App;
