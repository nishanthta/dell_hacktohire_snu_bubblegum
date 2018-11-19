import React from 'react';
import JsonTable from 'ts-react-json-table';

export default class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      itemData: null,
      cols: null
    }
  }

  componentDidMount() {
    /*const url = 'http://' + '18.188.218.137' + '/get-items?location=delhi';
    console.log(url);
    fetch(url)
    .then(async (res) => {
      console.log(res);
      let data = await res.json();
      console.log(data);
      let cols = [];
      for (let d in data) {
        let pt = Object.keys(data[d]);
        cols.push(pt);
      }
      console.log(cols);
      let temp = [];
      for (let index in cols) {
        let col = {};
        col['Header'] = cols[index];
        temp.push(col);
      }
      console.log(temp);
      temp = [];
      for (let index in data) {
        let obj = {};
        obj = data[index];
        temp.push(obj);
      }
      this.setState({retrieved: true, itemData: data, cols: temp});*/
    const data = [{
      name: 'Tanner Linsley',
      age: 26,
    }, {
      name: 'Tandner Linsley',
      age: 26,
    }];

    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age',
    }];
    this.setState({ itemData: data, cols: columns });
  }

  render() {
    console.log(this.state);
    if (!this.state.itemData || !this.state.cols) {
      return null;
    }
    return (
      <div>
        <JsonTable rows = {this.state.itemData} />
      </div>
    );
  }
}