import React, { Component } from "react";

class CartList extends Component {
  constructor() {
    super();
    this.state = {
      cartList: []
    };
  }
  render() {
    console.log(this.state.cartList);
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
          {this.state.cartList.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <button>-</button>
                  <span>{item.amount}</span>
                  <button>+</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  componentDidMount() {
    this.setState({
      cartList: this.props.store.getState().cart
    });
  }
}

export default CartList;
