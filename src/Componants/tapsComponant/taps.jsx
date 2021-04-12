import React, {useState} from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const Taps = ({item}) => {
    const [key, setKey] = useState('home');

  return (
    <Tabs 
      defaultActiveKey="Details"
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="Details" title="Details">
          <div>
              {item.itemDiscribtion}
          </div>
      </Tab>
      <Tab eventKey="More information" title="More information">
      <div>
              {item.itemDiscribtion}
          </div>
      </Tab>
      <Tab eventKey="Reviews" title="Reviews">
      <div>
              {item.itemDiscribtion}
          </div>
      </Tab>
    </Tabs>
  );
}

export default Taps;