import React, { Fragment } from "react";
import Li from "./li";
import { useSelector } from "react-redux";

function List(props) {
  let data = useSelector((state) => {
    return state;
  });
  return (
    <Fragment>
      {data.map((item) => {
        return <Li key={item.id} data={item}></Li>;
      })}
    </Fragment>
  );
}

export default List;
