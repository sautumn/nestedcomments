import React from 'react'
import Comment from './Comment.jsx'
import TextBox from './TextBox.jsx'


class Comments extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      comments: [],
      username: '',
      comment: '',
    }
    //child methods
    this.getUsername = this.getUsername.bind(this)
    this.getComment = this.getComment.bind(this)
    //update forms
    this._onClick = this._onClick.bind(this)
    this._onEnter = this._onEnter.bind(this)
  }

  getUsername(lowerState){
    this.setState({
      username: lowerState
    }, console.log(this.state.username));
  }

  getComment(lowerState){
    this.setState({
      comment: lowerState
    }, console.log(this.state.comment));
  }

  _onClick() {
    if (this.state.comment !== '') {
      const commentObj = {
        username: this.state.username,
        comment: this.state.comment,
      }
      this.setState({
        comments: this.state.comments.concat([commentObj]),
        text: '',
        comment: '',
      }, console.log(this.state.comments))
    }
  }

  _onEnter(e) {
    if (e.key === 'Enter') {
      this._onClick()
    }
  }

  render() {
    const title = 'Leave a comment'
    const commentSection = 'Comments below:'
    const comments = this.state.comments
    return (
      <div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div>{title}</div>
          <TextBox placeholder={'Username'} getInput={this.getUsername}/>
          <TextBox placeholder={'Leave a comment'} getInput={this.getComment}/>
          <button onClick={this._onClick}>Submit</button>
        </div>
        <div>{commentSection}</div>
        { comments.map((comment) => (<Comment commentObj={comment} />) )}
      </div>
    )
  }


}

export default Comments
