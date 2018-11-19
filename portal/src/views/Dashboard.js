import React from 'react';
import JsonTable from 'ts-react-json-table';


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: null,
    }
  }

  moveItem = (item) => {

  }

  _onClickCell = (event, columnName, rowData) => {
    console.log(columnName);
    console.log(rowData);
    if (columnName == 'localage' && rowData.localage >= 90) {
      // re-route to a new page with details of suggestion
      let response = window.confirm('Are you sure you want to move this item?');
      // true if OK, false if Cancel
      if (response) {
        this.moveItem(rowData);    
      } else {
        console.log('user denied access');
      }
    }
  }

  predict(item) {
    // make appropriate API request here
  }

  componentDidMount() {
    let url = null;
    if (this.props.old) {
      url = 'http://18.188.218.137/get-old';
    } else {
      url = 'http://18.188.218.137/get-items?location=delhi';
    }
    console.log(url);
    fetch(url)
      .then(async (res) => {
        console.log(res);
        let d = await res.json();
        for (let index in d) {
          let data = d[index];
          delete data.Binding;
          delete data.Brand;
          delete data.Creator;
          delete data.ProductTypeName;
          delete data.companiesMoving;
          delete data.location;
          delete data.govSchemeSize;
          delete data.supplyDelhi;
          delete data.supplyKolkata;
          delete data.supplyChennai;
          delete data.supplyMumbai;
          let title = data.Title.substring(0, 30) + "...";
          data.Title = title;
        }
        let data = d;
        if (data.age >= 90) {
          // item needs prediction
          this.predict(data);
        }
        console.log(data);
        this.setState({ itemData: data });
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
      <span>
        <JsonTable onClickCell={this._onClickCell} rows={this.state.itemData} excludeColumns={['_id', 'Binding', 'Creator', 'ProductTypeName', 'companiesMoving', 'govSchemeSize', 'location', 'supplyChennai', 'supplyDelhi', 'supplyMumbai', 'supplyKolkata']} />
      </span>
    );
  }
}