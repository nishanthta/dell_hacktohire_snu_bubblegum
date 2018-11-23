import React, { Component, lazy, Suspense } from 'react';
import DefaultHeader from '../../containers/DefaultLayout/DefaultHeader';
import { AppHeader } from '@coreui/react';
import Switches from '../Base/Switches/Switches';
import {Doughnut} from 'react-chartjs-2';

const doughnut = {
  labels: [
    'Receiver and amplifiers',
    'Home Theaters',
    'Personal Computer',
    'Single Detail Page Misc',
    'Car Audio or Theater',
    'PC Accessory',
    'Speakers'
  ],
  datasets: [
    {
      data: [71, 24, 2, 1, 1, 1, 1],
      backgroundColor: [
        'red',
        'green',
        'yellow',
        'blue',
        'black',
        'orange',
        'pink'
      ],
    }],
};

const options = {
  tooltips: {
    enabled: false,
  },
  maintainAspectRatio: true
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <AppHeader>
          <DefaultHeader />
        </AppHeader>
        <Doughnut data={doughnut} options={options} />
        <Switches />
      </div>
    )
  }
}

export default Dashboard;

const styles = {
  table: {
    width: 100,
  }
}
