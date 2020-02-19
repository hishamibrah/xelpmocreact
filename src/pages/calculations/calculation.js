import React, { Component } from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Input } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';

class Calculation extends Component {
  render() {
    return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Input</Tab>
          <Tab>Sum and Substraction</Tab>
          <Tab>Multiplication and Division</Tab>
        </TabList>
        <TabPanel>
          <Button variant="contained" color="primary" component="span">
            Submit
          </Button>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
    );
  }
}
export default Calculation;
