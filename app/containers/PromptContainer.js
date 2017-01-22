var React = require('react')
var Prompt = require('../components/Prompt')

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      username: ''
    }
  },
  handleUpdateUser: function (e) {
    this.setState({
      username: e.target.value
    })
  },
  handleSubmitUser: function (e) {
    e.preventDefault()
    // var username = this.state.username;
    this.setState({
      username: ''
    })
    if (this.props.routeParams.playerOne) {
      // if playerOne route go to Battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      // else go to playerTwo
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  render: function () {
    return (
      <Prompt
        header={this.props.route.header}
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        username={this.state.username}
        />
    )
  }
})

module.exports = PromptContainer
