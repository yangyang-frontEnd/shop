import React from "react";
import { useSelector } from "react-redux";

function Footer(params) {
  let data = useSelector((state) => {
    return state.filter((item) => {
      return item.number > 0;
    });
  });
  let number = data.reduce((prev, curr) => {
    return prev + curr.number;
  }, 0);

  let allPrice = data.reduce((prev, curr) => {
    return prev + curr.number * curr.price;
  }, 0);

  let maxPrice = data.reduce((prev, curr) => {
    return Math.max(prev, curr.price);
  }, 0);
  return (
    <footer>
      总计：{number}件商品，共计花费{allPrice}元，最贵单价为{maxPrice}元
    </footer>
  );
}

export default Footer;
