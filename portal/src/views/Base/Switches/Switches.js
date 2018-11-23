import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import { renderIf } from '../../Dashboard/renderIf';

class Switches extends Component {

  isChecked = (option) => {
    const ls = window.localStorage;
    const old = ls.getItem(option);
    console.log(option + ' ' + old);
    if (old == 'false') {
      return false;
    } else {
      return true;
    }
  }

  localStorage = window.localStorage;

  chennai = () => {
    console.log('chennai triggered');
    const old = localStorage.getItem('chennai');
    console.log(old);
    if (old == 'false') {
      localStorage.setItem('chennai', 'true');
    } else {
      localStorage.setItem('chennai', 'false');
    }
  }

  delhi = () => {
    console.log('delhi triggered');
    const old = localStorage.getItem('delhi');
    console.log(old);
    if (old == 'false') {
      localStorage.setItem('delhi', 'true');
    } else {
      localStorage.setItem('delhi', 'false');
    }
  }

  kolkata = () => {
    console.log('kolkata triggered');
    const old = localStorage.getItem('kolkata');
    console.log(old);
    if (old == 'false') {
      localStorage.setItem('kolkata', 'true');
    } else {
      localStorage.setItem('kolkata', 'false');
    }
  }

  mumbai = () => {
    console.log('mumbai triggered');
    const old = localStorage.getItem('mumbai');
    console.log(old);
    if (old == 'false') {
      localStorage.setItem('mumbai', 'true');
    } else {
      localStorage.setItem('mumbai', 'false');
    }
  }

  company = () => {
    console.log('move to company triggered');
    const old = localStorage.getItem('move to company');
    console.log(old);
    if (old == 'false') {
      localStorage.setItem('move to company', 'true');
    } else {
      localStorage.setItem('move to company', 'false');
    }
  }

  gov = () => {
    console.log('gov tender triggered');
    const old = localStorage.getItem('gov tender');
    console.log(old);
    if (old == 'false') {
      localStorage.setItem('gov tender', 'true');
    } else {
      localStorage.setItem('gov tender', 'false');
    }
  }

  education = () => {
    console.log('education triggered');
    const old = localStorage.getItem('education');
    console.log(old);
    if (old == 'false') {
      localStorage.setItem('education', 'true');
    } else {
      localStorage.setItem('education', 'false');
    }
  }


  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                Qualify/disqualify results
              </CardHeader>
              <CardBody className="p-0">
                <Table hover striped className="table-align-middle mb-0">
                  <thead>
                  <tr>
                    <th>Event</th>
                    <th>Switch</th>
                    <th>Additional info</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>
                      Chennai
                    </td>
                    <td>
                      <AppSwitch className={'mx-1'} variant={'3d'} checked={this.isChecked('chennai')} onClick={this.chennai} color={'primary'} size={'lg'} />
                    </td>
                    <td>
                      -
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Delhi
                    </td>
                    <td>
                      <AppSwitch className={'mx-1'} variant={'3d'} checked={this.isChecked('delhi')} onClick ={this.delhi} checked color={'primary'} size={'lg'}  />
                    </td>
                    <td>
                      -
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Kolkata
                    </td>
                    <td>
                      <AppSwitch className={'mx-1'} variant={'3d'} checked={this.isChecked('kolkata')} onClick ={this.kolkata} color={'primary'} size={'lg'} />
                    </td>
                    <td>
                      -
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Mumbai
                    </td>
                    <td>
                      <AppSwitch className={'mx-1'} variant={'3d'} checked={this.isChecked('mumbai')} onClick ={this.mumbai} color={'primary'} size={'lg'}  />
                    </td>
                    <td>
                      -
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Moving to new company offices
                    </td>
                    <td>
                      <AppSwitch className={'mx-1'} variant={'3d'} checked={this.isChecked('move to company')} onClick ={this.company} color={'primary'} size={'lg'}  />
                    </td>
                    <td>
                      -
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Selling to government for scheme handouts
                    </td>
                    <td>
                      <AppSwitch className={'mx-1'} variant={'3d'} checked={this.isChecked('gov tender')} onClick ={this.gov} color={'primary'} size={'lg'}  />
                    </td>
                    <td>
                      -
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Donating to educational institutions
                    </td>
                    <td>
                      <AppSwitch className={'mx-1'} variant={'3d'} checked={this.isChecked('education')} onClick ={this.education} color={'primary'} size={'lg'}  />
                    </td>
                    <td>
                      -
                    </td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </div>

    );
  }
}

export default Switches;
