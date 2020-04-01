import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom'
import ArticalDetail  from "./ArticalDetail";
class Artical extends Component {
    render() {
        return (
            <div>
                <Link to="/artical/1">文章1</Link>
                <Link to="/artical/2">文章2</Link>
                <Route component={ArticalDetail} path="/artical/:id"></Route>
            </div>
        );
    }
}

export default Artical;