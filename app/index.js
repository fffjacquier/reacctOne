/*
var USER_DATA = {
  'name': 'francois jacquier',
  'imageurl': 'https://avatars2.githubusercontent.com/u/1888996?v=3&s=460',
  'username': 'fffjacquier'
}
*/

var ReactDom = require('react-dom')
var routes = require('./config/routes')

/*
var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageurl} alt='' />
  }
})

var ProfileName = React.createClass({
  render: function () {
    return <div> {this.props.name} </div>
  }
})

var ProfileLink = React.createClass({
  render: function () {
    return <Link href={'https://www.github.com/' + this.props.username}> {this.props.username} </Link>
  }
})

var Link = React.createClass({
  changeUrl: function () {
    window.location.replace(this.props.href)
  },
  render: function () {
    return (
      <span onClick={this.changeUrl}>
        { this.props.children }
      </span>
    )
  }
})

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageurl={this.props.user.imageurl} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
})
*/

ReactDom.render(routes, document.getElementById('app'))
