import React, { Component } from "react";
import { increment, decrement } from "../../actions/cart";
// connect方法执行之后是一个高阶组件
import { connect } from "react-redux";
class CartList extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>商品名称</th>
            <th>价格</th>
            <th>数量</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cartList.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <button onClikc={(item)=>{this.props.decrement(item.id)}}>-</button>
                  <span>{item.amount}</span>
                  <button onClikc={(item)=>{this.props.increment(item.id)}}>+</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
// mapStateToProps,这里的state实际上就是store.getState()的值
const mapStateToProps = state => {
  // 这里return了什么，在组件里就可以通过this.props来获取
  return {
    cartList: state.cart
  };
};
// connect方法有4个参数，常用的是前面两个，
// 第一个参数是mapStateToProps，作用就是从store把state注入到当前组件的props上
// 第二个参数可以是mapDispatchToProps,这个参数的主要作用是把action生成的方法注入到当前组件的props上，一般来说没必要这么用
// 直接第二个参数传递一个对象，这里面的对象就是actionCreators，只要传入了actionCreators,在组件内就通过this.props.actionCreator来调用，这样的话，在调用之后，那个actionCreator就会自动帮你把它内部的action dispatch出去
export default connect(mapStateToProps)(CartList);
