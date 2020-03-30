import React, { Component ,createRef} from "react";
import PropTypes from 'prop-types'
class TodoInput extends Component {
  static propTypes={
    btnText:PropTypes.string
  }
  static defaultProps={
    btnText:'添加TODO'
  }
  constructor(){
    super()
    this.state={
      inputValue:''
    }
    this.inputDom=createRef()
  }
  handleInputChange=(e)=>{
    this.setState({
      inputValue:e.currentTarget.value
    })
  }
  handleKeyUp=(e)=>{
    if(e.keyCode===13){
    console.log('in')

      this.handleAddClick()
    }
  }
  handleAddClick=()=>{
    if(this.state.inputValue==='')return
     this.props.addTodo(this.state.inputValue.trim(),()=>{
       this.inputDom.current.focus()
     })
  }
  render() {
    return (
        <div>
          <input  ref={this.inputDom} type="text" value={this.state.inputValue} onChange={this.handleInputChange} onKeyUp={this.handleKeyUp}/>
          <button onClick={this.handleAddClick}>{this.props.btnText}</button>
        </div>
    );
  }
}

export default TodoInput;
