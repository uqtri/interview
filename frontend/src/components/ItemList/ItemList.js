import React from "react";
import Item from "./item/Item";
import "./ItemList.css";
export default function ItemList() {
  return (
    <div className="item-list">
      <Item name={"Cate Name max 2 line"} />
      <Item name={"Cate Name max 2 line"} />{" "}
      <Item name={"Cate Name max 2 line"} />{" "}
      <Item name={"Cate Name max 2 line"} />{" "}
      <Item name={"Cate Name max 2 line"} />
      <Item name={"Cate Name max 2 line"} />{" "}
      <Item name={"Cate Name max 2 line"} />{" "}
      <Item name={"Cate Name max 2 line"} />{" "}
      <Item name={"Cate Name max 2 line"} />
      <Item name={"Cate Name max 2 line"} />
      <Item name={"Cate Name max 2 line"} />
    </div>
  );
}
