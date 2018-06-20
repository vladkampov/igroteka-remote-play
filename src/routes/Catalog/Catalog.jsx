import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Submenu, Card } from '../../components';


@inject('gameStore', 'consoleStore')
@observer
class Home extends Component {
  componentDidMount() {
    const { gameStore, consoleStore, history, match: { params: { listType } } } = this.props;
    
    if (!listType) {
      history.push('/catalog/consoles');
    } else if (listType !== 'consoles' && listType !== 'games') {
      history.push('/not-found');
    }
    
    consoleStore.getConsoles();
    gameStore.getGames();
  }

  renderGrid = () => {
    const { gameStore, consoleStore, match: { params: { listType } } } = this.props;
    const { filteredInstances } = listType === 'games' ? gameStore : consoleStore;

    if (gameStore.isLoading || consoleStore.isLoading) {
      return <div>Loading</div>
    }

    return filteredInstances.map(instance => (
      <Col md={4} key={instance.id}>
        <Card type={listType} {...instance} />
      </Col>
    ));
  }

  render() {
    return (
      <div>
        TODO: slider
        <Submenu listType={this.props.match.params.listType} />
        <Grid>
          <Row>
            {this.renderGrid()}
          </Row>
        </Grid>
      </div>
    );
  }
}
  

export default Home;
