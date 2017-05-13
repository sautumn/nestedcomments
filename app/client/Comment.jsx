import React from 'react'
import Comments from './Comments.jsx'

class Comment extends React.Component {
  constructor(props){
    // console.log(props)
    super(props)
    this.state = {
      open: false
    }
    this.toggleReply = this.toggleReply.bind(this)
  }

  toggleReply(){
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    console.log('props',this.props)
    // const commentObj = props
    return (
      <div style={{border: '2px black solid'}}>
        {`${this.props.commentObj.username}: ${this.props.commentObj.comment}`}
        <button onClick={this.toggleReply}>Reply</button>
        <div>
          { this.state.open? <Comments /> : ''}

        </div>
      </div>
    )
  }
}


export default Comment
