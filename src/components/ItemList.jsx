import Item from "./Item";
const ItemList = () => {
  return (
    //ここでItemコンポーネントを並べる
    <div>
      <h2>商品リスト</h2>
      <ul>
        <li>
          <Item name="リンゴ" price={300} />
        </li>
        <li>
          <Item name="バナナ" price={200} />
        </li>
      </ul>
    </div>
  );
};

export default ItemList;
