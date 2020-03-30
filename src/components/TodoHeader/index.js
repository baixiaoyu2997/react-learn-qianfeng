import React from 'react';
import PropTypes from 'prop-types'
function TodoHeader(props) {
    return (
       <>
         <h1>
            {props.children}
        </h1>
        <h3>{props.desc}</h3>
       </>
    );
}
TodoHeader.propTypes={
    desc:PropTypes.string,
    x:PropTypes.number,
    y:PropTypes.number
}
export default TodoHeader;