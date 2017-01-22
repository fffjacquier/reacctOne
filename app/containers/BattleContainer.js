var React = require('react')
var Battle = require('../components/Battle')
var githubhelpers = require('../utils/githubhelpers')

var BattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  handleInitiateBattle: function () {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  render: function () {
    return (
      <Battle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onInitiateBattle={this.handleInitiateBattle} />
    )
  },
  componentDidMount: function () {
    var query = this.props.location.query
    githubhelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players) {
        this.setState({
          isLoading: false,
          playersInfo: players
        })
      }.bind(this))
  }
})

module.exports = BattleContainer
