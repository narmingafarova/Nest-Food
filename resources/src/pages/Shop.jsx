import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import ShopItems from "../components/shop/ShopItems";

const Shop = () => {
  return (
    <>
      <BreadCrumb title="Products" />
      <ShopItems />
    </>
  );
};

export default Shop;
