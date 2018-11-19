import React from 'react';
import ReactTable from 'react-table';

export default class Dashboard extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const url = 'http://' + '18.188.218.137' + '/get-items?location=delhi';
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
          this.setState({retrieved: true, itemData: data, cols: temp});
        })
        .catch(err => {
          console.log(err);
        })
      }

      render() {
          return(
            <ReactTable data={this.state.itemData} columns={this.state.cols} />
          );
      }
}