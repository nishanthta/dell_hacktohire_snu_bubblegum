import React from 'react';
import JsonTable from 'ts-react-json-table';

export default class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      itemData: null,
    }
  }

  _onClickCell = (event, columnName, rowData) => {
    console.log(columnName);
    console.log(rowData);
    if (columnName == 'suggestion' && rowData.age >= 90) {
      // re-route to a new page with details of suggestion
    }
  }

  predict(item) {
    // make appropriate API request here
  }

  componentDidMount() {
    const url = 'http://18.188.218.137/get-items?location=delhi';
    console.log(url);
    fetch(url)
    .then(async (res) => {
      console.log(res);
      let data = await res.json();
      if (data.age >= 90) {
        // item needs prediction
        this.predict(data);
      }
      console.log(data);
      this.setState({itemData: data});
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    if (!this.state.itemData) {
      return null;
    }
    return (
      <div>
        <JsonTable onClickCell={this._onClickCell} rows = {this.state.itemData} excludeColumns={['_id']} />
      </div>
    );
  }
}