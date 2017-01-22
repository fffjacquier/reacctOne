var axios = require('axios')

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username)
}
function getRepos (username) {
  return axios.get('https://api.github.com/users/' + username + '/repos?per-page=100')
}
function getStars (repos) {
  return repos.data.reduce(function (prev, current) {
    return prev + current.stargazers_count
  }, 0)
}
function getPlayersData (player) {
  return getRepos(player.login)
    .then(getStars)
    .then(function (totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}
function calculateScores (players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

var helpers = {
  battle: function (players) {
    var playerOneData = getPlayersData(players[0])
    var playerTwoData = getPlayersData(players[1])

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function (err) {
        console.warn('error', err)
      })
  },
  getPlayersInfo: function (players) {
    // fetch from Github
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    })).then(function (results) {
      return results.map(function (user) {
        return user.data
      })
    }).catch(function (err) {
      console.warn('Error in getPlayersInfo:', err)
    })
  }
}

module.exports = helpers
