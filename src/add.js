import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Add(props) {
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let dispatch = useDispatch();

  return (
    <div>
      添加商品：
      <input
        type="text"
        placeholder="请输入商品名称"
        value={name}
        onChange={({ target }) => {
          setName(target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="请输入商品价格"
        value={price}
        onChange={({ target }) => {
          setPrice(parseFloat(target.value));
        }}
      ></input>
      <button
        onClick={() => {
          dispatch({
            type: "add",
            data: {
              id: Date.now(),
              name,
              price,
              number: 1,
            },
          });
          setName("");
          setPrice("");
        }}
      >
        添加商品
      </button>
    </div>
  );
}

export default Add;
