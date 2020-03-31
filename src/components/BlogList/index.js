import React, { Component } from "react";
import { connect } from "react-redux";
import BlogItem from "./BlogItem";
class BlogList extends Component {
  render() {
    const { list, isLoading } = this.props;
    return isLoading ? (
      <div>loading...</div>
    ) : (
      <ul>
        {list.map(item => {
          return <BlogItem key={item.id} {...item} />;
        })}
      </ul>
    );
  }
}
const mapState = state => ({
  blogList: state.blog.list,
  isLoading: state.blog.isLoading
});
export default connect(mapState)(BlogList);
