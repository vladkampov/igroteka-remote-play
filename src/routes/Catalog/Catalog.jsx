import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Submenu, Card, Loader } from '../../components';


@inject('gameStore', 'consoleGroupStore')
@observer
class Home extends Component {
  componentDidMount() {
    const { gameStore, consoleGroupStore, history, match: { params: { listType } } } = this.props;

    if (!listType) {
      history.push('/catalog/consoles');
    } else if (listType !== 'consoles' && listType !== 'games') {
      history.push('/not-found');
    }

    consoleGroupStore.getConsoleGroups();
    gameStore.getGames();
  }

  renderGrid = () => {
    const { gameStore, consoleGroupStore, match: { params: { listType } } } = this.props;
    const { filteredInstances } = listType === 'games' ? gameStore : consoleGroupStore;

    if (gameStore.isLoading || consoleGroupStore.isLoading) {
      return <Loader />;
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
