var React = require('react')
var Link = require('react-router').Link
var MainContainer = require('./MainContainer')

var Home = React.createClass({
  render: function () {
    return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p className='lead'>Some fancy text</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Get started</button>
        </Link>
      </MainContainer>
    )
  }
})

module.exports = Home
