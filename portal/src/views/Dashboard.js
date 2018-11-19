import React from 'react';
import ReactTable from 'react-table';
import { renderIf } from '../renderIf';

export default class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
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
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    }];

    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Friend Name',
      accessor: d => d.friend.name // Custom value accessors!
    }, {
      Header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }];
    this.setState({ itemData: data, cols: columns });
  }

  render() {
    if (!this.state.itemData || !this.state.cols) {
      return null;
    }
    return (<ReactTable data={this.state.itemData} columns={this.state.cols} />);
  }
}