import React from "react";
import { connect } from "dva";
import ProductList from "../../components/ProductList";

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: "products/delete",
      payload: id
    });
    console.log(products);
  }
  return (
    <div>
      <h2>List of Produces</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

// 这里蛮奇怪的，参数一的返回不就是对象 { produces : .....  } 么？
// connect参数1大概就是从store里面结构出来对象 products 然后返回这个对象，参数2，即 Products 才可以使用这个
export default connect(({ products }) => ({ products }))(Products);
// 这种写法等同于
// function mapStateToProps(state) {
//   console.log(state);
//   return {
//     todos: state.todos
//   };
// }
// export default connect(mapStateToProps)(Products);

// 我大概明白了，首先看我们定义的store
// const app = dva({
//   initialState: {
//     products: [
//       { name: "dva", id: 1 },
//       { name: "antd", id: 2 }
//     ]
//   }
// });
