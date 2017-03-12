var React = require('react');
var PropTypes = React.PropTypes;
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelper = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentDidMount: function() {
    let query = this.props.location.query;
    githubHelper.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function(players){
        this.setState({
          isLoading: false,
          playerInfo: [players[0], players[1]]
        })
      }.bind(this));
  },
  onInitiateBattle: function(){
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playerInfo
      }
    })
  },
  render: function() {
    return (
      <div>
        <ConfirmBattle
          isLoading={this.state.isLoading}
          playerInfo={this.state.playerInfo}
          handleInitiateBattle={this.onInitiateBattle}/>
        <form>
          <button></button>
          <button></button>
        </form>
      </div>
    );
  }

});

module.exports = ConfirmBattleContainer;
