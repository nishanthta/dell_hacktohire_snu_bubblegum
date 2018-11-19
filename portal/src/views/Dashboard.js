import React from 'react';
import JsonTable from 'ts-react-json-table';

export default class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      itemData: null,
    }
  }

  componentDidMount() {
    const url = 'http://18.188.218.137/get-items?location=delhi';
    console.log(url);
    fetch(url)
    .then(async (res) => {
      console.log(res);
      let data = await res.json();
      console.log(data);
      this.setState({itemData: data});
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    console.log(this.state);
    if (!this.state.itemData) {
      return null;
    }
    return (
      <div>
        <JsonTable rows = {this.state.itemData} />
      </div>
    );
  }
}