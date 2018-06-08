import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';


@inject('gameStore')
@observer
class Home extends Component {
  componentDidMount() {
    const { gameStore } = this.props;

    gameStore.getGames();
  }

  render() {
    return (
      <div>
        Homepage
      </div>
    );
  }
}
  

export default Home;
