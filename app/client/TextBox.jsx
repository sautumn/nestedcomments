import React from 'react'

class TextBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
    this._onChange = this._onChange.bind(this)
  }
  _onChange(e) {
    this.setState({text: e.target.value})
    this.props.getInput(e.target.value)
  }

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder={this.props.placeholder}
          value={this.state.text}
          onChange={this._onChange}
        />
      </div>
    )
  }
}


export default TextBox
