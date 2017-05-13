import React    from 'react'
import ReactDOM from 'react-dom'
import Comments from './Comments.jsx'

const Test = React.createClass({
  render(){
    return (
      <div>
        <Comments />
      </div>
    )
  }
})

ReactDOM.render(<Test />, document.getElementById('app'))
