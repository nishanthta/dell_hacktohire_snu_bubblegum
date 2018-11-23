import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardHeader,
  Col,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import ReactTable from 'react-table';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { renderIf } from './renderIf';
import JsonTable from 'ts-react-json-table';
import DefaultHeader from '../../containers/DefaultLayout/DefaultHeader';
import { AppHeader } from '@coreui/react';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      itemData: null,
    };
  }

  moveItem = (item) => {
    const localStorage = window.localStorage;
    let flag = localStorage.getItem(item.Suggestion.toLowerCase());
    if (flag == 'false') {
      window.alert('You have disabled this option in your settings. Item will not be moved.');
      return;
    }
    fetch('http://18.188.218.137/move-item?src=chennai&dest=' + item.Suggestion.toLowerCase(), {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then(res => {
        console.log(res);
        let oldItemData = this.state.itemData;
        oldItemData.splice(oldItemData.indexOf(item), 1);
        this.setState({ itemData: oldItemData });
      })
      .catch(err => {
        console.log(err);
        window.alert('Sorry, your item could not be moved. Are you sure it was a 3PL?');
      });
  }

  _onClickCell = (event, columnName, rowData) => {
    console.log(columnName);
    console.log(rowData);
    if (columnName == 'Suggestion' && rowData.localage >= 90) {
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
      url = 'http://18.188.218.137/get-items?location=chennai';
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
          delete data.demandDelhi;
          delete data.demandMumbai;
          delete data.demandChennai;
          delete data.demandKolkata;
          delete data.globalage;
          if (data.label == 'PL1') {
            data.Suggestion = 'Chennai';
          } else if (data.label == 'PL2') {
            data.Suggestion = 'Delhi';
          } else if (data.label == 'PL3') {
            data.Suggestion = 'Kolkata';
          } else if (data.label == 'PL4') {
            data.Suggestion = 'Mumbai';
          } else if (data.label == 'comp') {
            data.Suggestion = 'Move to company';
          } else {
            // can come up if undefined
            data.Suggestion = 'Gov tender';
          }
          if (data.localage < 90 || !data.localage) {
            data.Suggestion = 'N/A'
          }
          delete data.label;
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

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  render() {
    console.log(this.state);
    if (!this.state.itemData) {
      return null;
    }
    return (
      <div>
        <AppHeader>
          <DefaultHeader />
        </AppHeader>
        <JsonTable className="table" onClickCell={this._onClickCell} rows={this.state.itemData} excludeColumns={['_id', 'label']} />
      </div>
    );
  }
}  