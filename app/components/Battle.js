var React = require('react')
var PropTypes = React.PropTypes
var style = require('../styles')
var Link = require('react-router').Link
var UserDetails = require('./UserDetails')
var UserDetailsWrapper = require('./UserDetailsWrapper')
var MainContainer = require('./MainContainer')
var Loading = require('./Loading')

function Battle (props) {
  return props.isLoading === true
    ? <Loading speed={50} text='Waiting' />
    : <MainContainer>
      <h1>Confirm Players</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Player 1'>
          <UserDetails info={props.playersInfo[0]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Player 2'>
          <UserDetails info={props.playersInfo[1]} />
        </UserDetailsWrapper>
      </div>

      <div className='col-sm-8 col-sm-offset-2'>
        <div className='col-sm-12' style={style.space}>
          <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
        </div>
        <div className='col-sm-12' style={style.space}>
          <Link to='/playerOne'>
            <button type='button' className='btn btn-lg btn-danger'>Reset players</button>
          </Link>
        </div>
      </div>
    </MainContainer>
}

Battle.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}
module.exports = Battle
