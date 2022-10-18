import Item from "./Item";
import { useState } from "react";

const ItemList = () => {
  const [items] = useState([
    { name: "りんご", price: 300 },
    { name: "バナナ", price: 200 },
    { name: "ぶどう", price: 2000 },
  ]);
  return (
    //ここでItemコンポーネントを並べる
    <div>
      <h2>商品リスト</h2>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.name}>
              <Item name={item.name} price={item.price} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
