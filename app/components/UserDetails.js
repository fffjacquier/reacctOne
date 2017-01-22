var React = require('react')
var PropTypes = React.PropTypes
var style = require('../styles')

function UserDetails (user) {
  return (
    <div>
      <li className='list-group-item'><h3>Score: {user.score}</h3></li>
      <li className='list-group-item'><img src={user.info.avatar_url} className='img-rounded img-responsive' style={style.imgMin} alt='' /></li>
      {!!user.info.name && <li className='list-group-item'>Name: {user.info.name}</li>}
      <li className='list-group-item'>Followers: {user.info.followers}</li>
      <li className='list-group-item'>Following: {user.info.following}</li>
    </div>
  )
}

UserDetails.PropTypes = {
  score: PropTypes.number,
  info: {
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired
  }
}

module.exports = UserDetails
